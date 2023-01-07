import React from 'react';

const PostForm = () => {
  return (
    <div className='bg-gray-400 h-screen w-screen'>
      <h1 className='text-2xl text-center text-gray-800 font-semibold my-10'>
        Details Form
      </h1>
      <form className='flex flex-col justify-center items-center w-1/4 rounded-md mx-auto my-10 py-10 bg-blue-100'>
        <div className='mb-6'>
          <label
            for='Name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Your Name
          </label>
          <input
            type='Name'
            id='email'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='name@flowbite.com'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            for='phone'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Your Phone
          </label>
          <input
            type='phone'
            id='phone'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='phone'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            for='Incident Date'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Incident Date
          </label>
          <input
            type='Incident Date'
            id='Incident Date'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Incident Date'
            required
          />
        </div>
        <div className=''>
          <label
            for='Details'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Details
          </label>
          <input
            type='Details'
            id='Details'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='Details'
            required
          />
        </div>

        <div className='flex items-start mb-6'>
          <div className='flex items-center h-5'>
            <input
              id='terms'
              type='checkbox'
              value=''
              className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
              required
            />
          </div>
          <label
            for='terms'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            I agree with the{' '}
            <a
              href='#'
              className='text-blue-600 hover:underline dark:text-blue-500'>
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Register new account
        </button>
      </form>
    </div>
  );
};

export default PostForm;
