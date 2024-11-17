import Image from 'next/image';
import React from 'react';

const BannerCard = () => {
  return (
    <div className='w-11/12 md:w-full relative flex flex-col items-center rounded-md'>
      <Image src={'/assets/bannerImage.png'} alt="banner" width={300} height={300} className='rounded-xl w-full' />

      <di className='absolute top-1/3 -left-6 z-0'>
        <Image src={'/assets/icons/leaf.png'} alt="line" width={300} height={300} className='w-16 h-16' />
      </di>


      <div className='absolute bottom-0 z-10 flex flex-col items-center gap-2 bg-white/70 w-[98%] rounded-xl mb-2'>
        <div className='p-4 flex items-center gap-2'>
          <h2 className='text-4xl font-bold'>12,000+</h2>
          <div className='w-[1px] bg-black h-10' />
          <h2 className='text-lg'>Happy learners rely on us regularly</h2>
        </div>
        <div className='w-full p-4 flex items-center bg-white/60 rounded-xl gap-3 md:gap-0'>
          <h2 className='font-semibold text-sm w-2/3'>
            Find your wellbeing
          </h2>
          <h2 className='text-[10px]'>
            By prioritizing self-care and making informed choices, one can enhance their overall quality of life
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;