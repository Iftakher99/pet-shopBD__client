import adoptPet from './images/GirlwithDOg.png';
import { Link } from 'react-router-dom';

const AdoptSection = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full h-vh  py-12 px-6">
      <h2 className="text-4xl font-bold text-[#13124C] mt-10 md:mt-20 text-center">
        Adopt a Pet
      </h2>
      <hr className="w-1/2 mx-auto h-1 bg-[#13124C] my-6 rounded-full border-0" />

      <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-6 md:space-y-0 md:space-x-10">
        <img
          src={adoptPet}
          alt="Happy Pet"
          className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center md:text-left">
          <p className="text-xl text-gray-600">
            Welcome to our pet adoption program! Adopting a pet is a wonderful
            way to bring joy and companionship into your life.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto text-gray-700">
        <h3 className="text-2xl font-semibold text-[#13124C] text-center mb-4">
          Benefits of Pet Adoption
        </h3>
        <ul className="list-disc list-inside space-y-2 text-lg ">
          <li>Provide a loving home to a pet in need</li>
          <li>Experience the unconditional love of a pet</li>
          <li>Create lasting memories and cherished moments</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#13124C] text-center mt-10 mb-4">
          Adoption Process
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Fill out an adoption application</li>
          <li>Meet potential pets in person</li>
          <li>Complete the necessary paperwork</li>
        </ol>

        <h3 className="text-2xl font-semibold text-[#13124C] text-center mt-10 mb-4">
          Responsibilities
        </h3>
        <p className="text-lg text-gray-600 text-center">
          Adopting a pet comes with responsibilities, including feeding,
          grooming, regular exercise, and providing medical care.
        </p>
      </div>

      <div className="mt-12 text-center">
        <Link to="/pets">
          <button
            className="bg-[#13124C] text-white text-lg font-medium py-3 px-8 rounded-full shadow-lg hover:bg-[#0d0b5c] transition-all duration-300"
            onClick={scrollToTop}
          >
            Find Your Perfect Pet
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AdoptSection;
