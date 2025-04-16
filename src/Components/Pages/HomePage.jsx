import React from 'react'

import NavBar from '../Layouts/NavBar';
import SoftwareDEv from '../SoftwareDEv';
import FeaturedJob from '../FEaturedJob';
const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="mt-44 md:w-[1184px] mx-auto">
       <SoftwareDEv/>
      <FeaturedJob/>
      </main>
    </>
  );
}

export default HomePage
