import React from 'react'

const SoftwareDEv = () => {
  return (
    <div className="">
      <h1 className="md:text-5xl text-4xl md:px-0 px-2 font-bold md:w-[560px] w-[358px] pb-10">
        The #1 job board for software development
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="bg-[#133654] text-white md:w-[584px] w-[358px]  md:mx-0 mx-4 p-12 rounded-xl">
          <div className="flex gap-4 items-center">
            <img
              src="/CompanyLogo.png"
              alt="companylogo"
              className="w-[64px]"
            />
            <h2 className=" text-[#FFFFFFB3] text-2xl font-semibold">
              Company XYZ
            </h2>
          </div>
          <p className="text-2xl font-medium py-6">
            ”One of the main advantages of posting jobs on Devtask is the skill
            level of the applicants. Some of the best talents in our team were
            found here.”
          </p>
          <p className="text-base font-medium text-[#FFFFFFB3]">
            John Wick, CTO
          </p>
          <p className="text-base font-medium text-[#FFFFFFB3] pt-10">
            Results
          </p>
          <div className="flex justify-between items-center py-5">
            <div>
              <h3 className="text-2xl font-bold">3-4x faster</h3>
              <p className="text-[#FFFFFFB3] ">to find our talents</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">+ 30</h3>
              <p className="text-[#FFFFFFB3] ">professionals hired</p>
            </div>
          </div>
        </div>
        <div className="bg-[#13544E] text-white  md:w-[584px] w-[358px]  md:mx-0 mx-4 p-12 rounded-xl">
          <div className="flex gap-4 items-center ">
            <img
              src="/TommyAbha.png"
              alt="TommyAbha"
              className="w-[64px] rounded-[40px]"
            />
            <h2 className="text-[#FFFFFFB3] text-2xl font-semibold">
              Tommy Abha
            </h2>
          </div>
          <p className="text-2xl font-medium py-6">
            ”Using Devtalk lead me to amazing freelancing gigs and ultimately to
            a dream job at a major tech company.”
          </p>
          <p className="text-base font-medium text-[#FFFFFFB3]">
            iOS developer at RockCode
          </p>
          <p className="text-base font-medium text-[#FFFFFFB3] pt-16">
            Results
          </p>
          <div className="flex justify-between items-center py-5">
            <div>
              <h3 className="text-2xl font-bold">+ 40</h3>
              <p className="text-[#FFFFFFB3] ">freelancing gigs</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">1</h3>
              <p className="text-[#FFFFFFB3] ">full-time hiring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoftwareDEv
