
import NavBar from '../Layouts/NavBar';
import SoftwareDEv from '../SoftwareDEv';
import FeaturedJob from '../FEaturedJob';
import RecentJobs from '../RecentJobs';
import Footer from '../Footer';
const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="mt-44 md:w-[1184px] mx-auto">
       <SoftwareDEv/>
      <FeaturedJob/>
      <RecentJobs/>
      </main>
      <Footer/>
    </>
  );
}

export default HomePage
