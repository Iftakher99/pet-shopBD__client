import HomeDarkCardLeftPic from './images/HomeDarkCardLeftPic.png';
import HomeDarkCardRightPic from './images/catImg.png';

const formatNumber = (number) => {
  const suffixes = ['', 'k', 'M', 'B', 'T'];
  const suffixNum = Math.floor(('' + number).length / 3);
  const shortNumber = parseFloat(
    (number / Math.pow(1000, suffixNum)).toFixed(1),
  );
  return shortNumber >= 1
    ? `${shortNumber}${suffixes[suffixNum]}+`
    : number.toString();
};

const CardBelowHome = () => {
  const adoptedPets = formatNumber(3182);
  return (
    <div className="mt-10 bg-gradient-to-l from-[#4e4975] to-[#9a92db] rounded-xl flex flex-col md:flex-row justify-between items-center h-auto md:h-72 w-full p-8 md:p-10 gap-6 md:gap-0">
      {/* Left Section */}
      <div className="flex items-center md:w-1/2 gap-6 md:gap-10">
        <img
          src={HomeDarkCardLeftPic}
          alt="Dog with toy"
          className="w-28 md:w-36"
        />

        <div className="text-white text-center md:text-left">
          <p className="text-3xl md:text-4xl font-bold">{adoptedPets}</p>
          <p className="text-xl md:text-2xl mt-2">Furry Friends</p>
          <p className="text-lg md:text-xl">Thriving in Loving Homes</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-row items-center md:w-1/2 gap-6">
        <img
          src={HomeDarkCardRightPic}
          alt="Dog pic"
          className="hidden md:block w-32 md:w-36"
        />

        <div className="text-white text-center md:text-left max-w-sm">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            WHAT WE DO?
          </h3>
          <p className="text-sm md:text-base">
            At PetShopBD, we are dedicated to connecting the perfect pet with
            the perfect family, making the adoption process simple and joyful.
            Adopt love, spread happiness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardBelowHome;
