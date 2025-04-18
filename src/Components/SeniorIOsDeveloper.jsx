import React from 'react'

const SeniorIOsDeveloper = () => {
  return (
    <div className="mt-32 w-full max-w-[1440px] mx-auto px-4">
      <h1 className="md:text-5xl text-3xl font-bold md:ml-[26%] ml-[2%] pb-16">
        Senior iOS Developer
      </h1>
      <div className="shadow-md border border-gray-200 rounded-lg flex flex-col md:flex-row max-w-[688px] w-full md:text-center text-start m-auto  justify-between py-10 px-6 md:px-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/iosDeveloper.png"
            alt="isoDeveloper"
            className="w-[64px] ml-[30%]"
          />
          <h4 className="text-lg font-semibold pt-5 pl-8">Company XY</h4>
          <p className="text-sm font-semibold pt-1 pl-10">Visit Website</p>
          <button className="text=xl font-medium bg-Tertiary text-white py-4 px-6 rounded-full mt-4">
            Apply for position
          </button>
        </div>
        {/* divider */}
        <div class="md:block hidden w-[2px] h-[300px] bg-gray-200"></div>
        {/*This is the vertical line  */}
        <div className="">
          <div className="py-5 pr-32">
            <p className="text-xs font-semibold pb-3 pr-4">Job Type:</p>
            <button className="text-xs  bg-[#C81E430A] border border-gray-300  bg-gray-100 px-3 py-1 rounded-full">
              Full-time
            </button>
          </div>
          <div className="py-7 pr-16">
            <p className="text-xs font-semibold pb-3 pr-24">Location:</p>
            <button className="text-xs text-secondary bg-[#C81E430A] border border-secondary bg-gray-100 px-2 py-1 rounded-full">
              New York, USA
            </button>
            <button className="text-xs text-secondary bg-[#C81E430A] border border-secondary bg-gray-100 px-2 py-1 rounded-full">
              Remote
            </button>
          </div>
          <div>
            <div className="mr-32">
              <p className="text-xs font-semibold pb-3 pr-5">Date posted:</p>
              <button className="text-sm text-Tertiary bg-blue-100 px-2 py-1 rounded-full md:mr-0">
                Sept 17, 2024
              </button>
            </div>
            <button className="text-sm font-medium text-[#C81E43] border border-2-[#C81E43] bg-[#C81EA30A] py-1 px-4 rounded-[40px] mr-24 mt-1">
              in the spotlight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeniorIOsDeveloper
