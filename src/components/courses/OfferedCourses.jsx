'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { courseData } from '../sub-components/courses/CourseData';
import CourseCard from '../sub-components/courses/CourseCard';

const OfferedCourses = ({ sliderRef }) => {
  const [courses, setCourses] = useState(courseData);

  return (
    <Swiper
      ref={sliderRef}
      spaceBetween={16}
      slidesPerView={4}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {
        courses.map((course, index) => (
          <SwiperSlide key={index} className='flex flex-col gap-4 w-1/2'>
            <CourseCard course={course} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default OfferedCourses;