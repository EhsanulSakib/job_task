import Image from 'next/image';
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { MdWatchLater } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";


const CourseCard = ({ course }) => {
  return (
    <div className='min-h-[600px] w-full rounded-2xl flex flex-col items-center justify-between overflow-hidden border border-b-4 shadow-sm cursor-pointer duration-150 transform ease-out hover:bg-[#9998E11A]'>
      <Image src={course.backgroundImage} alt={course.title} width={1000} height={1000} className='w-[600px] h-[180px] object-cover object-center scale-110' />

      <div className='min-h-[400px] w-full py-8 px-4 flex flex-col justify-between'>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-1 items-center'>
            <h2 className='p-1 bg-[#FF97001A] border border-[#FF970080] rounded-md'>{course.level}</h2>
            <h2 className='p-1 bg-[#CDE53333] border border-[#CDE53380] rounded-md'>{course.category}</h2>
          </div>

          <h2 className='text-2xl hover:underline'>{course.title}</h2>

          <div className='flex items-center gap-2'>
            <div className='flex gap-1 text-[#FF9700]'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <div className='font-semibold flex gap-1 items-center'>
              <h2>{course.rating}</h2>
              <h2>({course.numberOfRatings})</h2>
            </div>
          </div>
        </div>

        <div className='mt-12 flex flex-col gap-3 justify-between '>
          <div className='w-full flex gap-2 items-center pb-3 border-b'>
            <MdWatchLater className='text-[#9998E1] text-xl' />
            <p>{course.duration}</p>
            <div className='h-6 w-0.5 bg-black/20' />
            <IoBookSharp className='text-[#9998E1] text-xl' />
            <p>{course.lessons} Lessons</p>
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <Image src={course.instructorImage} alt={course.instructor} width={1000} height={1000} className='w-12 h-12 object-cover object-center rounded-full' />
              <h2 className='font-bold text-lg'>{course.instructor}</h2>
            </div>

            <div>
              {
                course.enrolled ?
                  <h2 className='px-2 flex gap-1 items-center rounded-md bg-black/5 border border-black/50'><TiTick className='p-0.5 rounded-full bg-black/20 text-black/50 text-lg' />Enrolled</h2>
                  :
                  <h2 className='font-bold text-2xl'>${course.price}</h2>
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;