import Image from 'next/image';
import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-[#9998E180] p-5 rounded-lg shadow-sm border">
      <div className='flex justify-between'>
        <Image src={review.profileImage} alt={review.name} width={1000} height={1000} className="w-12 h-12 rounded-full" />
        <Image src={'/assets/icons/comma.png'} alt="line" width={300} height={300} className='w-6 h-6' />
      </div>
      <div className="flex items-center gap-3 mb-2 ">
        <h3 className="font-semibold text-lg">{review.name}</h3>
      </div>
      <p className="text-gray-700">{review.review}</p>
    </div>
  );
};

export default ReviewCard;