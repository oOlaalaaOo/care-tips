import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import AppButton from "../../../../components/app-button/app-button";
import AppInput from "../../../../components/app-input/app-input";
import API from "@aws-amplify/api";
import { updateCareTip } from "../../../../graphql/mutations";
import { listCareTipCategorys } from "../../../../graphql/queries";
import { getCareTip } from "../../../../graphql/queries";
import AdminTopNavbar from "../../../../components/admin-top-navbar/admin-top-navbar";
import { Controller, useForm } from "react-hook-form";
import WithAdminAuth from "../../../../hoc/with-admin-auth";
import { useRouter } from "next/dist/client/router";

interface FormProps {
  tip: string;
  careTipCategoryID: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const tipResp = await API.graphql({
    query: getCareTip,
    variables: {
      id,
    },
  });

  const tip = tipResp.data.getCareTip;

  if (!tip) {
    return {
      notFound: true,
    };
  }

  const categoryResp = await API.graphql({
    query: listCareTipCategorys,
  });

  return {
    props: {
      categories: categoryResp.data.listCareTipCategorys.items,
      tip,
    },
  };
};

const AdminTipEdit: NextPage<{
  tip: { id: string; tip: string; careTipCategoryID: string };
  categories: any[];
}> = ({ tip, categories }) => {
  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormProps>({
    defaultValues: {
      tip: tip.tip,
      careTipCategoryID: tip.careTipCategoryID,
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: FormProps) => {
    setIsLoading(true);

    try {
      await API.graphql({
        query: updateCareTip,
        variables: {
          input: { ...data, id: tip.id },
        },
      });

      router.push("/admin/tips");
    } catch (err) {
      console.log("err", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AdminTopNavbar />

      <div className='flex flex-col w-full min-h-screen items-center justify-center'>
        <div className='flex flex-col w-4/12'>
          <div className='w-full mb-5'>
            <h1 className='text-4xl'>New Tip</h1>
          </div>

          <form
            className='flex flex-col w-full'
            onSubmit={handleSubmit(onSubmit)}>
            <div className='my-3'>
              <Controller
                name='careTipCategoryID'
                defaultValue=''
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <label htmlFor='careTipCategoryID'>Category</label>
                    <select
                      name='careTipCategoryID'
                      id='careTipCategoryID'
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      className='w-full mt-3 px-3.5 py-2.5 border border-inputBorder rounded-md text-inputText hover:border-inputBorderHover focus:outline-none focus:border-primary disabled:bg-disabled disabled:border-disabled'>
                      <option>Select</option>

                      {categories.map((category) => (
                        <option value={category.id} key={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </>
                )}
              />

              {errors.careTipCategoryID && <small>Category is required.</small>}
            </div>

            <div className='my-3 '>
              <Controller
                name='tip'
                defaultValue=''
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <AppInput
                    label='Tips'
                    id='tip'
                    className='w-full'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />

              {errors.tip && <small>Tips is required.</small>}
            </div>

            <div className='flex justify-end'>
              <AppButton
                label='Save'
                theme='primary'
                type='submit'
                loading={isLoading}
                loadingText='Processing...'
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WithAdminAuth(AdminTipEdit);
