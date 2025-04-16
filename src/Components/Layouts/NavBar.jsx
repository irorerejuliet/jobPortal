import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center mx-auto  md:w-[1859px] w-[358px] py-5">
      <div className="flex space-between gap-5 text-lg font-normal items-center">
        <Link to="/">
          <img src="/images/Logo.svg" alt="Logo" />
        </Link>
        <Link to="/ContactPage" className="py-2 py-4 rounded-[10px] md:block hidden">
          Contact
        </Link>
        <Link to="/FindJobPage">Find Jobs</Link>
      </div>
      <Link
        to="#"
        className="bg-Tertiary text-white rounded-[40px] text-sm font-medium"
      >
        <button className="flex gap-2 items-center py-1 px-3">
          <CiCirclePlus className="bg-white rounded-full text-Tertiary text-sm" />
          Post a Job
        </button>
      </Link>
    </nav>
  );
}

export default NavBar
