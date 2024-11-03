import HomeDarkCardLeftPic from './images/HomeDarkCardLeftPic.png';
import HomeDarkCardRightPic from './images/catImg.png';

const formatNumber = (number) => {
  const suffixes = ['', 'k', 'M', 'B', 'T'];
  const suffixNum = Math.floor(('' + number).length / 3);
  const shortNumber = parseFloat(
    (number / Math.pow(1000, suffixNum)).toFixed(1),
  );
  return shortNumber >= 1
    ? `${shortNumber}${suffixes[suffixNum]}${'+'}`
    : number.toString();
};

const CardBelowHome = () => {
  const adoptedPets = formatNumber(3182);
  return (
    <div className="bg-gradient-to-l mt-16 from-[#C5C0EA] to-[#9a92db] rounded-xl flex  flex-col md:flex-row justify-between items-center h-auto md:h-72 w-auto ">
      <div className="flex  justify-around items-center md:w-1/2 p-6">
        <div className=" md:h-auto md:w-36 ml-6">
          <img src={HomeDarkCardLeftPic} alt="Dog with toy" />
        </div>

        <div className="text-3xl md:text-4xl  text-white">
          <p className="inline text-3xl md:text-4xl font-bold">{adoptedPets}</p>{' '}
          <br />
          Furry Friends
          <br />
          Thriving in Loving Homes
        </div>
      </div>
      <div className="flex justify-center items-center md:w-1/2 p-6">
        <div className="h-full hidden md:block  md:ml-3 w-full ">
          <img className="" src={HomeDarkCardRightPic} alt="Dog pic" />
        </div>
        <div className="p-3 ml-6">
          <h3 className="text-3xl text-white mb-3">WHAT WE DO?</h3>
          <p className="text-md md:w-3/4 text-white text-justify">
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
