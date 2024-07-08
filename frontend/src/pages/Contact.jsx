import React, { useState } from 'react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleTextareaChange = (event) => {
    const { value } = event.target;
    setIsLoading(value.trim().length > 0); 
  };

  return (
    <div className='px-4 mx-auto max-w-screen-md'>
      <h2 className='text-center text-2xl font-semibold mb-4'>Contact Us</h2>
      <p className='text-center text-gray-600 mb-8 lg:mb-16'>
        Got a technical issue? Want to send feedback about a beta feature? Let us know.
      </p>
      <form action='#' className='space-y-4 relative'>
        <div>
          <label htmlFor='email' className='text-textColor font-semibold text-lg mb-2'>
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className='w-full px-4 py-3 border border-solid border-blue-200 focus:outline-none focus:border-blue-500 text-lg leading-7 placeholder-gray-400 rounded-md cursor-pointer'
          />
        </div>

        <div>
          <label htmlFor='subject' className='text-textColor font-semibold text-lg mb-2'>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Let us know how we can help you"
            className='w-full px-4 py-3 border border-solid border-blue-200 focus:outline-none focus:border-blue-500 text-lg leading-7 placeholder-gray-400 rounded-md cursor-pointer'
          />
        </div>

        <div className='sm:col-span-2 relative'>
          <label htmlFor='message' className='text-textColor font-semibold text-lg mb-2'>
            Your Message
          </label>
          <textarea 
            rows="6"
            id="message"
            placeholder="Leave a comment...."
            className='w-full px-4 py-3 border border-solid border-blue-200 focus:outline-none focus:border-blue-500 text-lg leading-7 placeholder-gray-400 rounded-md cursor-pointer'
            onChange={handleTextareaChange}
          />
          {isLoading && (
            <div className='absolute bottom-2 right-2'>
              <svg className='animate-spin h-5 w-5 text-blue-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 4.418 3.582 8 8 8v-4.009zm14-8.018A8.004 8.004 0 0120 12h4c0-4.418-3.582-8-8-8v4.273z"></path>
              </svg>
            </div>
          )}
        </div>

        <button type='submit' className='btn bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
