import React from 'react';
import Input_field from '../components/Input_field';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl">Login!</h1>
            <p className="text-gray-300">
              Fill up the form below to login
            </p>
          </div>
          <form>
            <Input_field name = "Name" type = "text" />
            <Input_field name = "Email" type = "text" />
            <Input_field type = "password" name="Password" />

            {/* <div className="flex justify-between">
              <input
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              <input
                className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
              />
            </div> */}

            <div className="text-center lg:text-left">
            <a href="/">
            <button
              type="button"
              className="inline-block w-full rounded bg-blue-500 px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light">
               Login
            </button>
            </a>

            {/* <!-- Register link --> */}
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
              Don't have an account?
              <a
                href="#!"
                className="text-blue-500 text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                >Register </a>
            </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
