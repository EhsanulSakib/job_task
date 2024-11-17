'use client'
import React, { useRef } from 'react';
import Title from '../(shared)/title/Title';
import AllReviews from './AllReviews';

const Reviews = () => {
  const title = "Learners love EduPath. See why they rate us 4.9 out of 5"
  const style = "font-bold text-xl lg:text-2xl xl:text-3xl text-center";
  const sliderRef = useRef(null);

  return (
    <div className='flex flex-col my-8 py-4 lg:py-8 justify-between items-center w-full px-[1%] xl:px-[0%] mx-auto gap-12'>
      <div className='w-11/12 md:w-[50%] m-auto'>
        <Title title={title} style={style} />
      </div>

      <div className='w-full'>
        <AllReviews />
      </div>

    </div>
  );
};

export default Reviews;