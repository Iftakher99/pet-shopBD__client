import logo from '../NavBar/images/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-[#c5c0ea] text-primary-content p-10">
        <aside className=" text-[#0b0a2e]">
          <p className="font-bold text-lg">Pet Shop BD</p>{' '}
          <p>Your trusted platform for pet adoption</p>
          <p>Copyright © 2024 - All rights reserved</p>
        </aside>
        <nav className="text-xl text-[#13124C]">
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaTwitter />{' '}
            </Link>
            <Link>
              <FaInstagram />
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
};
export default Footer;
