import React from "react";
import type { NextPage } from "next";
import AppButton from "../components/app-button/app-button";
import AppInput from "../components/app-input/app-input";
import Auth from "@aws-amplify/auth";
import { useRouter } from "next/dist/client/router";
import { useForm, Controller } from "react-hook-form";
import UserTopNavbar from "../components/user-top-navbar/user-top-navbar";
import WithAuth from "../hoc/with-auth";

interface FormProps {
  name: string;
}

const Account: NextPage = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FormProps>();

  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(data: FormProps) {
    setIsLoading(true);

    try {
      const user = await Auth.currentAuthenticatedUser();

      await Auth.updateUserAttributes(user, { name: data.name });
    } catch (error) {
      console.log("error signing in", error);
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    (async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();

        setValue("name", user.attributes.name);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);

  return (
    <>
      <UserTopNavbar />

      <div className='flex flex-col w-full min-h-screen items-center justify-center'>
        <div className='flex flex-col w-4/12'>
          <div className='w-full'>
            <h1 className='text-4xl text-center'>Account</h1>
          </div>

          <form
            className='flex flex-col w-full mt-10'
            onSubmit={handleSubmit(onSubmit)}>
            <div className='my-3'>
              <Controller
                control={control}
                name='name'
                defaultValue=''
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <AppInput
                    label='Name'
                    id='name'
                    className='w-full'
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />

              {errors.name && <small>Name is required.</small>}
            </div>

            <div className='flex justify-end'>
              <AppButton
                label='Update Details'
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

export default WithAuth(Account);
