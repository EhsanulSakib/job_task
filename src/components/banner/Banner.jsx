import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Title from '../(shared)/title/Title';
import TextContent from '@/components/sub-components/banner/TextContent';
import BannerCard from '../sub-components/banner/BannerCard';

const Banner = () => {
  const title = "#1 Platform Powering Health and Wellness";
  const titleStyle = "font-bold text-5xl";
  return (
    <div className='bg-secondary'>
      <div className='flex justify-between items-center w-full xl:w-3/5 px-[1%] xl:px-[0%] mx-auto gap-8'>
        {/* Left Section */}
        <div className='w-11/12'>
          <div className='flex gap-2 items-center'>
            <h2 className='flex gap-1 text-[#FF9700]'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </h2>
            <h2>4.9 (566)</h2>
          </div>
          <Title title={title} style={titleStyle} />

          <div className='mt-8'>
            <TextContent />
          </div>

        </div>

        {/* Right Section */}
        <BannerCard />
      </div>
    </div>
  );
};

export default Banner;