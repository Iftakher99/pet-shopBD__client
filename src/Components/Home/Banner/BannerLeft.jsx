import Button from '../../UI/Button';
import { Link } from 'react-router-dom';
const BannerLeft = () => {
  return (
    <div className="h-full flex flex-col p-4 items-start justify-center">
      <div className="text-5xl md:text-7xl mt-5  font-inter text-center ">
        <h2 className=" text-secondary ">Give a New Life to</h2>
        <div className="font-acme mt-5">
          <h2 className=" text-primaryLight">
            Furry <span className="text-primaryBold">Friends</span>
          </h2>
        </div>
      </div>
      <p className="text-xl mt-5 text-justify">
        Pet adoption and rehoming are both vital aspects of animal welfare,
        offering hope and a fresh start to pets in need.
      </p>
      <div className="flex justify-around items-center mt-8 w-full gap-6">
        <Link to="adopt">
          <Button primary>Adopt me</Button>
        </Link>

        <Link to="rehome">
          <Button secondary>Rehome Now</Button>
        </Link>
      </div>
    </div>
  );
};
export default BannerLeft;
