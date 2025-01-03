import Banner from '@/components/banner/Banner';
import Courses from '@/components/courses/Courses';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import Reviews from '@/components/reviews/Reviews';
import Services from '@/components/services/Services';
import React from 'react';

const page = () => {
  return (
    <div className='max-w-[1920px] mx-auto min-h-screen text-black'>
      <Navbar />
      <Banner />
      <Courses />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
};

export default page;
