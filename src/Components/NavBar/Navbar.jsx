import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Navbar = () => {
  return (
    <>
      <div className=" navbar bg-[#C5C0EA] text-[#0b0a2e] font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow  bg-violet-700"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/pets">Pets</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex md:ml-7 justify-center items-center">
              <img
                className=" h-12 w-12 md:h-16 md:w-16"
                src={logo}
                alt="PetShopBD"
              />
              <span className="btn btn-ghost text-xl">Pet Shop BD</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pets">Pets</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:mr-16">
          <Link to="/services">
            <button className="btn bg-yellow-400">Give a Pet</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
