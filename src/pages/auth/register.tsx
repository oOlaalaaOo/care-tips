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
  name: string;
}

const Register: NextPage = () => {
  const router = useRouter();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormProps>();

  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(data: FormProps) {
    setIsLoading(true);

    try {
      await Auth.signUp({
        username: data.username,
        password: data.password,
        attributes: {
          name: data.name,
          "custom:isAdmin": "0",
        },
      });

      router.push("/auth/login");
    } catch (err) {
      console.log("err ", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='flex flex-col w-full min-h-screen items-center justify-center'>
      <div className='flex flex-col w-4/12'>
        <div className='w-full'>
          <h1 className='text-4xl text-center'>Sign Up</h1>
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
                minLength: 8,
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

            {errors.password && errors.password.type === "required" && (
              <small>Password is required.</small>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <small>Password must be atleast 8 characters long.</small>
            )}
          </div>
          <div></div>
          <div className='flex flex-row flex-wrap justify-between'>
            <AppButton
              label='Go back to home page'
              theme='secondary'
              disabled={isLoading}
              onClick={() => router.push("/")}
            />

            <AppButton
              label='Sign Up'
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

export default Register;
