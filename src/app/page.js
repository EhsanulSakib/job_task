import Banner from '@/components/banner/Banner';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const page = () => {
  return (
    <div className='max-w-[1920px] mx-auto min-h-screen text-black'>
      <Navbar />
      <Banner />
    </div>
  );
};

export default page;
