import { Link } from 'react-router-dom';
import footPrint from './images/footprint2.png';
import holdingHand from './images/holdingHand.png';
import Button from '../UI/Button';

const HomeAdoptionBox = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="grid md:grid-cols-3  grid-cols-1   mb-10 rounded-lg text-white gap-4 w-full bg-gradient-to-r from-primary to-primaryLight">
      <div className="left text-justify    p-10  mx-auto">
        <div className="flex gap-4 mb-2">
          <h1 className="text-4xl font-semibold"> Adoption</h1>
          <img src={footPrint} alt="" />
        </div>
        <h3 className="text-3xl font-semibold mb-2">
          We need help. so do they.
        </h3>
        <p className="font-mono text-md w-full ">
          Adopting a pet is not just about giving an animal a home; it’s about
          bringing love, companionship, and joy into your life. When you open
          your heart and home to a pet in need, you’ll be rewarded with
          unwavering loyalty, affection.
        </p>
      </div>
      <div className="">
        <div className="flex h-full justify-around items-center gap-2">
          <div className="flex justify-around items-center mt-8 w-full gap-6">
            <Link to="adopt">
              <Button primary>Adopt me</Button>
            </Link>

            <Link to="rehome">
              <Button secondary>Rehome Now</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <img src={holdingHand} alt="" />
      </div>
    </div>
  );
};
export default HomeAdoptionBox;
