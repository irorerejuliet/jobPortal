import React from 'react'
import { featuredData } from './Constant/FeaturedData';

const FeaturedJob = () => {
  return (
    <div className="mt-32">
      <h2 className="text-3xl font-semibold pb-5 md:px-0 px-3">Featured Job</h2>
      <div className="md:px-0 px-4 grid md:grid-cols-3 grid-cols-1 gap-8">
        {featuredData.map(
          ({ id, image, name, title, description, city, site }) => (
            <div
              className="shadow-lg md:w-[384px] w-[358px] max-h-[500px] text-center border border-gray-300 rounded-xl py-8 px-12 "
              key={id}
            >
              <div className="text-center ml-[7rem]">
                <img src={image} alt="iosdeveloper" className="w-[64px]" />
              </div>
              <p className="text-base font-bold text-primary py-3">{name}</p>
              <p className="text-xl font-bold pb-2">{title}</p>
              <button className="text-sm font-medium text-[#C81E43] border border-2-[#C81E43] bg-[#C81EA30A] py-1 px-4 rounded-[40px]">
                {description}
              </button>
              <div>
                <button className="text-sm font-medium text-secondary bg-[#C81E430A] py-1 px-4 rounded-[40px] mt-1 border border-secondary">
                  {city}
                </button>
                <button className="text-sm font-medium text-secondary bg-[#C81E430A] py-1 px-4 rounded-[40px] mt-1 ml-1 border border-primary">
                  {site}
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default FeaturedJob
