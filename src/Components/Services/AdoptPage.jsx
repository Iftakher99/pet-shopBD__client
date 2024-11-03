import adoptPet from './images/GirlwithDOg.png';
import { Link } from 'react-router-dom';

const AdoptPage = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-gray-50 py-16 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#13124C] mt-10 md:mt-20 text-center">
        Adopt a Pet
      </h2>
      <hr className="w-20 md:w-1/3 mx-auto h-1 bg-[#13124C] my-8 rounded-full border-0" />

      <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-6 md:space-y-0 md:space-x-12">
        <img
          src={adoptPet}
          alt="Happy Pet"
          className="w-full md:w-1/2 max-w-md rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center md:text-left max-w-lg">
          <p className="text-xl md:text-2xl text-gray-700">
            Welcome to our pet adoption program! Adopting a pet is a wonderful
            way to bring joy and companionship into your life.
          </p>
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-gray-800 px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#13124C] text-center mb-6">
          Benefits of Pet Adoption
        </h3>
        <ul className="list-disc list-inside space-y-3 text-lg md:text-xl px-4">
          <li>Provide a loving home to a pet in need</li>
          <li>Experience the unconditional love of a pet</li>
          <li>Create lasting memories and cherished moments</li>
        </ul>

        <h3 className="text-2xl md:text-3xl font-semibold text-[#13124C] text-center mt-12 mb-6">
          Adoption Process
        </h3>
        <ol className="list-decimal list-inside space-y-3 text-lg md:text-xl px-4">
          <li>Fill out an adoption application</li>
          <li>Meet potential pets in person</li>
          <li>Complete the necessary paperwork</li>
        </ol>

        <h3 className="text-2xl md:text-3xl font-semibold text-[#13124C] text-center mt-12 mb-6">
          Responsibilities
        </h3>
        <p className="text-lg md:text-xl text-gray-700 text-center">
          Adopting a pet comes with responsibilities, including feeding,
          grooming, regular exercise, and providing medical care.
        </p>
      </div>

      <div className="mt-16 text-center">
        <Link to="/pets">
          <button
            className="bg-[#13124C] text-white text-lg md:text-xl font-medium py-4 px-10 rounded-full shadow-lg hover:bg-[#0d0b5c] transition-all duration-300 transform hover:scale-105"
            onClick={scrollToTop}
          >
            Find Your Perfect Pet
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AdoptPage;
