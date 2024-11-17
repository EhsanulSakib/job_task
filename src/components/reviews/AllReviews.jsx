'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { reviewData } from '../sub-components/reviews/ReviewsData';
import ReviewCard from '../sub-components/reviews/ReviewCard';
import { Pagination } from 'swiper/modules';

import './pagination.css';

const AllReviews = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={16}
      slidesPerView={5}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
        1536: { slidesPerView: 6 },
      }}
      className="w-full min-h-[500px] md:min-h-[410px]"
    >
      {
        reviewData?.map((review, index) => (
          <SwiperSlide key={index} className='flex flex-col gap-4 w-1/2'>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))
      }

    </Swiper>
  );
};

export default AllReviews;