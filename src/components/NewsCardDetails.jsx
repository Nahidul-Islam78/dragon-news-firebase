import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCardDetails = ({ news }) => {
  const { category_id,title, image_url, details } = news;
  return (
    <div>
      <p className="font-bold">NewsCardDetails</p>
      <div className="card-body space-y-4 border border-base-200 p-2">
        <img
          className="w-full h-[306px] object-cover rounded-sm"
          src={image_url}
          alt=""
        />
        <p className="font-bold text-3xl">{title}</p>
        <p>{details}</p>
        <Link
          className="btn  btn-secondary w-fit "
          to={`/category/${category_id}`}
        >
          <FaArrowLeft /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsCardDetails;