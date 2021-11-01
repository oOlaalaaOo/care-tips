import React from "react";
import type { NextPage } from "next";
import AppButton from "../../components/app-button/app-button";
import AppInput from "../../components/app-input/app-input";
import Auth from "@aws-amplify/auth";
import { useRouter } from "next/dist/client/router";
import { useForm, Controller } from "react-hook-form";

interface FormProps {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormProps>();

  const [isLoading, setIsLoading] = React.useState(false);
  const [loginError, setLoginError] = React.useState<string | null>(null);

  async function onSubmit(data: FormProps) {
    setIsLoading(true);

    try {
      const user = await Auth.signIn(data.username, data.password);

      if (user.attributes["custom:isAdmin"] === "0") {
        router.push("/home");
      } else {
        await Auth.signOut();

        setLoginError("Not a valid user.");
      }
    } catch (error) {
      console.log("error signing in", error);

      if (error && error.message) {
        setLoginError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='flex flex-col w-full min-h-screen items-center justify-center'>
      <div className='flex flex-col w-4/12'>
        <div className='w-full'>
          <h1 className='text-4xl text-center'>Sign In</h1>
        </div>

        <form
          className='flex flex-col w-full mt-10'
          onSubmit={handleSubmit(onSubmit)}>
          {loginError && (
            <div className='my-3'>
              <div className='bg-gray-400 px-4 py-3 rounded'>
                <p className='text-sm'>{loginError}</p>
              </div>
            </div>
          )}

          <div className='my-3'>
            <Controller
              control={control}
              name='username'
              defaultValue=''
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <AppInput
                  label='Username'
                  id='username'
                  className='w-full'
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />

            {errors.username && <small>Username is required.</small>}
          </div>

          <div className='my-3'>
            <Controller
              control={control}
              name='password'
              defaultValue=''
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <AppInput
                  label='Password'
                  id='password'
                  className='w-full'
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  type='password'
                />
              )}
            />

            {errors.password && <small>Password is required.</small>}
          </div>
          <div className='flex flex-row flex-wrap justify-between'>
            <AppButton
              label='Go back to home page'
              theme='secondary'
              disabled={isLoading}
              onClick={() => router.push("/")}
            />

            <AppButton
              label='Sign In'
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
  );
};

export default Login;
