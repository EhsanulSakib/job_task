import React from 'react';

const TextContent = () => {
  return (
    <div className='w-11/12 flex flex-col gap-3'>
      <h2 className='font-semibold text-lg lg:text-xl'>We&rsquo;re restoring home as the primary place of personal well-being</h2>
      <p className='text-base'>Health is not just about what you&rsquo;re eating. It&rsquo;s also about what you&rsquo;re thinking and saying</p>

      <div className='flex gap-4'>
        <button className='bg-primary border border-primary text-white py-3 px-4 hover:bg-primary/80 duration-300 text-sm lg:text-base rounded-full'>Browse Courses</button>

        <button className='border border-primary text-primary py-3 px-4 hover:bg-primary/80 hover:text-white duration-300 text-sm lg:text-base rounded-full'>Get Started</button>
      </div>
    </div>
  );
};

export default TextContent;
