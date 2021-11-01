import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import AppButton from "../../../../components/app-button/app-button";
import AppInput from "../../../../components/app-input/app-input";
import API from "@aws-amplify/api";
import { updateCareTipCategory } from "../../../../graphql/mutations";
import { getCareTipCategory } from "../../../../graphql/queries";
import { useRouter } from "next/dist/client/router";
import AdminTopNavbar from "../../../../components/admin-top-navbar/admin-top-navbar";
import Storage from "@aws-amplify/storage";
import { useForm, Controller } from "react-hook-form";
import WithAdminAuth from "../../../../hoc/with-admin-auth";

interface FormProps {
  name: string;
  description: string;
  imageFile: any;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const resp = await API.graphql({
    query: getCareTipCategory,
    variables: {
      id,
    },
  });

  const category = resp.data.getCareTipCategory;

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
    },
  };
};

const AdminCategoryEdit: NextPage<{
  category: {
    id: string;
    name: string;
    description: string;
    imageFile: string;
  };
}> = ({ category }) => {
  const router = useRouter();
  const { id: categoryId } = router.query;

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormProps>({
    defaultValues: {
      name: category.name,
      description: category.description,
      imageFile: null,
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: FormProps) => {
    try {
      setIsLoading(true);

      let imageName = category.imageFile;

      if (data.imageFile) {
        imageName = String(Date.now());

        await Storage.put(imageName, data.imageFile[0]);
      }

      await API.graphql({
        query: updateCareTipCategory,
        variables: {
          input: {
            id: categoryId,
            name: data.name,
            description: data.description,
            image: imageName,
          },
        },
      });

      router.push("/admin/categories");
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
            <h1 className='text-4xl'>New Category</h1>
          </div>

          <form
            className='flex flex-col w-full'
            onSubmit={handleSubmit(onSubmit)}>
            <div className='my-3'>
              <Controller
                name='name'
                defaultValue=''
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <AppInput
                    label='Name'
                    id='name'
                    className='w-full'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />

              {errors.name && <small>Name is required.</small>}
            </div>

            <div className='my-3'>
              <Controller
                name='description'
                defaultValue=''
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <AppInput
                    label='Description'
                    id='description'
                    className='w-full'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </div>

            <div className='my-3'>
              <Controller
                name='imageFile'
                defaultValue=''
                control={control}
                render={({ field: { onChange } }) => (
                  <AppInput
                    label='Image'
                    id='imageFile'
                    className='w-full'
                    onChange={(e) => onChange(e.target.files)}
                    type='file'
                  />
                )}
              />
            </div>

            <div className='flex justify-end'>
              <AppButton
                label='Save'
                theme='primary'
                type='submit'
                disabled={isLoading}
                loading={isLoading}
                loadingText='Processing...'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WithAdminAuth(AdminCategoryEdit);
