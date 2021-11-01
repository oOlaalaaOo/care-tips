import Auth from "@aws-amplify/auth";
import { useRouter } from "next/dist/client/router";
import React from "react";
import Image from "next/image";

const UserTopNavbar = (): JSX.Element => {
  const router = useRouter();

  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'>
              <span className='sr-only'>Open main menu</span>

              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>

              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <Image
                className='block w-auto rounded-md'
                src='/assets/images/undraw_blooming.png'
                alt='Kringle UK'
                width={35}
                height={30}
              />
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <a
                  href='#categories'
                  className={`text-gray-300 ${
                    router.pathname !== "/home"
                      ? "hover:bg-gray-700 hover:text-white"
                      : "bg-gray-900"
                  } rounded-md px-3 py-2 text-sm font-medium`}
                  onClick={(e) => {
                    e.preventDefault();

                    router.push("/home");
                  }}>
                  Home
                </a>
                <a
                  href='#tips'
                  className={`text-gray-300 ${
                    router.pathname !== "/account"
                      ? "hover:bg-gray-700 hover:text-white"
                      : "bg-gray-900"
                  } rounded-md px-3 py-2 text-sm font-medium`}
                  onClick={(e) => {
                    e.preventDefault();

                    router.push("/account");
                  }}>
                  Account
                </a>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='ml-3 relative'>
              <a
                href='#logout'
                className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
                onClick={async (e) => {
                  e.preventDefault();

                  await Auth.signOut();

                  router.push("/auth/login");
                }}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='sm:hidden' id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <a
            href='#home'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            onClick={(e) => {
              e.preventDefault();

              router.push("/home");
            }}>
            Home
          </a>
          <a
            href='#users'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            onClick={(e) => {
              e.preventDefault();

              router.push("/account");
            }}>
            Account
          </a>
          <a
            href='#logout'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            onClick={async (e) => {
              e.preventDefault();

              await Auth.signOut();

              router.push("/auth/login");
            }}>
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default UserTopNavbar;
