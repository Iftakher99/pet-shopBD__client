import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import developerPng from './images/developer-png.png';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-base-100 rounded-lg shadow-lg space-y-6 md:space-y-0 ">
      {/* Contact Information */}
      <div className="space-y-4 w-full md:w-1/2">
        <h3 className="text-4xl font-bold text-primary">Let's Get in Touch</h3>

        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-lg text-accent" />
          <Link
            className="link link-hover text-lg"
            to="mailto:iftakhermahmud.dev@gmail.com"
          >
            iftakhermahmud.dev@gmail.com
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <FaLinkedin className="text-lg text-accent" />
          <Link
            className="link link-hover text-lg"
            to="https://www.linkedin.com/in/iftakher-mahmud/"
          >
            LinkedIn: iftakher-mahmud
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <FaGithub className="text-lg text-accent" />
          <Link
            className="link link-hover text-lg"
            to="https://github.com/Iftakher99"
          >
            GitHub: Iftakher99
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <FaPhone className="text-lg text-accent" />
          <Link className="link link-hover text-lg" to="tel:+8801745736161">
            +880 1745736161
          </Link>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-full md:w-1/2 mb-10">
        <img
          src={developerPng}
          alt="Profile"
          className="w-full max-w-xs rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Contact;
