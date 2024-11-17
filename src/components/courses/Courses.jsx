'use client'
import React, { useRef } from 'react';
import Title from '../(shared)/title/Title';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import OfferedCourses from './OfferedCourses';
const Courses = () => {
  const title = "Our popular courses";
  const style = "font-bold text-xl lg:text-2xl xl:text-3xl";
  const sliderRef = useRef(null);

  const handleSlider = (direction) => {
    if (sliderRef.current) {
      const swiper = sliderRef.current.swiper;
      if (direction === 'left') {
        swiper.slidePrev(); // Slide to the previous slide
      } else if (direction === 'right') {
        swiper.slideNext(); // Slide to the next slide
      }
    }
  };

  return (
    <div className='flex flex-col justify-between w-full xl:w-4/5 px-[1%] xl:px-[0%] xl:ml-[20%] mx-auto gap-8 py-4 lg:py-8 xl:py-12'>
      <div className='w-full lg:w-2/3 flex items-end justify-between'>
        <div className='flex flex-col gap-4 w-4/5 md:w-[70%]'>
          <Title title={title} style={style} />
          <h2 className='text-sm lg:text-base xl:text-lg'>By taking proactive steps to nurture mental health, we can enhance our quality of life, build resilience, and foster a sense of inner peace and balance</h2>
        </div>

        <div className='flex gap-4'>
          <button className='p-4 rounded-full border hover:font-bold duration-300 text-sm lg:text-base' onClick={() => { handleSlider('left') }}><FaAngleLeft /></button>

          <button className='p-4 rounded-full border hover:font-bold duration-300 text-sm lg:text-base' onClick={() => { handleSlider('right') }}><FaAngleRight /></button>
        </div>
      </div>

      <div>
        <OfferedCourses sliderRef={sliderRef} />
      </div>

    </div>
  );
};

export default Courses;