import AdoptSection from './AdoptSection';
import PostPetSection from './PostPetSection';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 p-6 md:p-12 lg:p-16">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col rounded-lg bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <AdoptSection />
        </div>

        <div className="flex flex-col rounded-lg bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <PostPetSection />
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-600 mb-4">
          Join us in our mission to help pets find their forever homes!
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default Services;
