import Banner from '@/components/banner/Banner';
import Courses from '@/components/courses/Courses';
import Navbar from '@/components/navbar/Navbar';
import Services from '@/components/services/Services';
import React from 'react';

const page = () => {
  return (
    <div className='max-w-[1920px] mx-auto min-h-screen text-black'>
      <Navbar />
      <Banner />
      <Courses />
      <Services />
    </div>
  );
};

export default page;
