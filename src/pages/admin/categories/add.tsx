import React from "react";
import type { NextPage } from "next";
import AppButton from "../../../components/app-button/app-button";
import AppInput from "../../../components/app-input/app-input";
import API from "@aws-amplify/api";
import { createCareTipCategory } from "../../../graphql/mutations";
import AdminTopNavbar from "../../../components/admin-top-navbar/admin-top-navbar";
import Storage from "@aws-amplify/storage";
import { useForm, Controller } from "react-hook-form";
import WithAdminAuth from "../../../hoc/with-admin-auth";
import { useRouter } from "next/dist/client/router";

interface FormProps {
  name: string;
  description: string;
  imageFile: any;
}

const AdminCategoryAdd: NextPage = () => {
  const router = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormProps>();

  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: FormProps) => {
    setIsLoading(true);

    try {
      let imageName = "";

      if (data.imageFile) {
        imageName = String(Date.now());

        await Storage.put(imageName, data.imageFile[0]);
      }

      await API.graphql({
        query: createCareTipCategory,
        variables: {
          input: {
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

export default WithAdminAuth(AdminCategoryAdd);
