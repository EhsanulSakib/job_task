'use client'
import React, { useState } from 'react';
import Title from '../(shared)/title/Title';
import { TiTick } from 'react-icons/ti';
import Image from 'next/image';
const Services = () => {
  const [activeOption, setActiveOption] = useState('option1');
  const title = "We provide..."
  const style = "font-bold text-xl lg:text-2xl xl:text-3xl";


  return (
    <div className='flex flex-col md:flex-row my-8 py-4 md:py-0 justify-between items-center w-full xl:w-3/5 px-[1%] xl:px-[0%] mx-auto gap-12'>

      <div className='flex flex-col gap-8'>
        <Title title={title} style={style} />

        <div className='flex flex-col gap-4'>
          <div>
            <h2 className={`${activeOption === 'option1' ? 'font-bold' : ''} flex gap-4 items-center text-base md:text-lg lg:text-xl cursor-pointer`} onClick={() => { setActiveOption('option1') }}><TiTick className={`${activeOption === 'option1' ? 'bg-[#9998E1] text-white' : 'bg-black/20 text-black/50'} p-0.5 rounded-full`} />Personalized routine</h2>

            <div className={`${activeOption === 'option1' ? 'block' : 'hidden'} my-4 border-y border-black/20 py-2`}>
              <h2 className=''>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</h2>
            </div>
          </div>

          <div>
            <h2 className={`${activeOption === 'option2' ? 'font-bold' : ''} flex gap-4 items-center text-base md:text-lg lg:text-xl cursor-pointer`} onClick={() => { setActiveOption('option2') }}><TiTick className={`${activeOption === 'option2' ? 'bg-[#9998E1] text-white' : 'bg-black/20 text-black/50'} p-0.5 rounded-full`} />Follow-up after completing courses</h2>

            <div className={`${activeOption === 'option2' ? 'block' : 'hidden'} my-4 border-y border-black/20 py-2`}>
              <h2 className=''>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</h2>
            </div>
          </div>

          <div>
            <h2 className={`${activeOption === 'option3' ? 'font-bold' : ''} flex gap-4 items-center text-base md:text-lg lg:text-xl cursor-pointer`} onClick={() => { setActiveOption('option3') }}><TiTick className={`${activeOption === 'option3' ? 'bg-[#9998E1] text-white' : 'bg-black/20 text-black/50'} p-0.5 rounded-full`} />Access to additional resources</h2>

            <div className={`${activeOption === 'option3' ? 'block' : 'hidden'} my-4 border-y border-black/20 py-2`}>
              <h2 className=''>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</h2>
            </div>
          </div>

          <div>
            <h2 className={`${activeOption === 'option4' ? 'font-bold' : ''} flex gap-4 items-center text-base md:text-lg lg:text-xl cursor-pointer`} onClick={() => { setActiveOption('option4') }}><TiTick className={`${activeOption === 'option4' ? 'bg-[#9998E1] text-white' : 'bg-black/20 text-black/50'} p-0.5 rounded-full`} />Free community support</h2>

            <div className={`${activeOption === 'option4' ? 'block' : 'hidden'} my-4 border-y border-black/20 py-2`}>
              <h2 className=''>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</h2>
            </div>
          </div>

        </div>
        <div>
          <button className='text-primary border border-primary py-3 px-4 hover:bg-primary/80 hover:text-white duration-300 text-sm lg:text-base rounded-full shadow-sm'>Learn More About Our Services</button>
        </div>
      </div>


      <div className='w-full relative'>
        <Image src={'/assets/service.png'} alt='services' width={1200} height={1200} className='min-w-[400px] min-h-[450px] rounded-xl object-cover object-center' />

        <div className='absolute top-1/3 -left-6 z-0'>
          <Image src={'/assets/icons/verified.png'} alt="line" width={300} height={300} className='w-16 h-16' />
        </div>
      </div>
    </div>
  );
};

export default Services;