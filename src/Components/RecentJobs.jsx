// import React from 'react'
// import { RecentJobData } from './Constant/RecentJobData';

// const RecentJobs = () => {
//   return (
//     <div className="text-3xl font-semibold pb-5 md:px-0 px-3 mt-32">
//       <h2>Recent Jobs</h2>
//       <div className="space-y-4">
//         {RecentJobData.map(({ id, image, name, title, date, city, site }) => (
//           <div
//             className="flex  items-center  md:w-[880px] w-[358px]  shadow-md border border-gray-200 rounded-2xl py-3 px-5 "
//             key={id}
//           >
//               <img src={image} alt="reactNative" className="w-[64px]" />
//             <div className="md:w-[880px] w-[358px]">
//               <div className="md:flex flex-wrap items-center justify-between">
//                 <p className="text-base font-bold text-primary py-3 pl-4">
//                   {name}
//                 </p>
//                 <button className="text-sm font-medium text-Tertiary bg-[#0057FF0A] py-1 px-4 rounded-[40px] border border-4-[#0057FF0A]">
//                   {date}
//                 </button>
//               </div>
//               <div className="md:flex flex-wrap justify-between">
//                 <p className="md:text-2xl text-xl font-semibold  pl-4">
//                   {title}
//                 </p>
//                 <div>
//                   <button className="text-sm font-medium text-secondary bg-[#C81E430A] py-1 px-4 rounded-[40px] mt-0 border border-primary">
//                     {city}
//                   </button>
//                   <button className="text-sm font-medium text-secondary bg-[#C81E430A] py-1 px-4 rounded-[40px] ml-1 border border-secondary">
//                     {site}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="text-sm font-medium py-4 px-6 rounded-full mx-auto  border border-black mt-12 ml-[30%]">
//         Browse all Jobs
//       </button>
//     </div>
//   );
// }

// export default RecentJobs






import React from 'react'
import { RecentJobData } from './Constant/RecentJobData';

const RecentJobs = () => {
  return (
    <div className="space-y-3 md:mx-0 mx-3">
      <h2 className="text-3xl font-semibold  md:px-0 px-3 mt-32">
        Recent Jobs
      </h2>
      {RecentJobData.map(({ id, image, name, title, date, city, site }) => (
        <div
          className="md:flex flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition py-4 px-5  border border-gray-200 md:w-[880px] w-[358px]"
          key={id}
        >
          {/* Left: Logo and Text */}
          <div className="md:flex flex-row items-center gap-4">
            <img
              src={image}
              alt="reactNative"
              className="w-[64px] md:ml-0 ml-32"
            />

            <div className="md:text-start text-center">
              <p className="text-base font-bold text-primary ">{name}</p>
              <h2 className="md:text-2xl text-xl font-medium">{title} Remi</h2>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col items-end gap-2 mt-5">
            <span className="text-sm text-Tertiary bg-blue-100 px-2 py-1 rounded-full md:mr-0 mr-28">
              {date}
            </span>
            <div className="flex gap-2 md:mr-0 mr-20">
              <span className="text-xs text-secondary bg-[#C81E430A] border border-secondary bg-gray-100 px-2 py-1 rounded-full">
                {city}
              </span>
              <span className="text-xs text-secondary bg-[#C81E430A] border border-secondary px-2 py-1 rounded-full">
                {site}
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="">
        <button className="text-sm font-medium py-4 px-6 rounded-full mx-auto  border border-black mt-10 ml-[30%]">
          Browse all Jobs
        </button>
      </div>
    </div>
  );
}

export default RecentJobs

