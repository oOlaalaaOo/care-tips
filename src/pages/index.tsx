/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import AppButton from "../components/app-button/app-button";
import { useRouter } from "next/dist/client/router";

const Index: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div className='w-full flex flex-col min-h-screen items-center justify-center'>
        <div className='flex flex-col w-4/12 items-center p-10 relative'>
          <Image
            src={"/assets/images/undraw_blooming.png"}
            alt='care-tip-logo'
            width={400}
            height={300}
          />

          <div className='mt-10'>
            <h1 className='text-4xl'>Care Tips</h1>
          </div>

          <div className='w-full mt-10'>
            <AppButton
              label='Sign In'
              theme='primary'
              className='mb-2 w-full'
              onClick={() => router.push("/auth/login")}
            />
            <AppButton
              label='Sign Up'
              theme='secondary'
              className='mt-2 w-full'
              onClick={() => router.push("/auth/register")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
