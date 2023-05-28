import { useState } from 'react'

export default function RegisterOrLogin() {

const [signIn, setSignIn] = useState(false)

  return (
    <>
      {signIn ? (
        <>
          <div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
              <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Create an account
              </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
              <div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
                <form className='space-y-6' action='#' method='POST'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Password
                    </label>
                    <div className='mt-2'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
                      />
                    </div>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900 mt-4'
                    >
                      Confirm Password
                    </label>

                    <div className='mt-2 '>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div className='flex flex-row justify-center mt-4'>
                  <p>Already have an account? </p> &nbsp;
                  <button type='submit' onClick={() => setSignIn(false)}>
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
              <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Sign In
              </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
              <div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
                <form className='space-y-6' action='#' method='POST'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Password
                    </label>
                    <div className='mt-2'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                    >
                      Sign In
                    </button>
                  </div>
                </form>

                <div className='flex flex-row justify-center mt-4'>
                  <p>Dont't have an account? </p> &nbsp;
                  <button type='submit' onClick={() => setSignIn(true)}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}