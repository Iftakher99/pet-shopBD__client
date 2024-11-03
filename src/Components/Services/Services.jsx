import AdoptSection from './AdoptSection';
import PostPetSection from './PostPetSection';

const Services = () => {
  return (
    <div className="main-container bg-gradient-to-b from-white via-gray-50 to-blue-100 p-4 md:p-8">
      <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="adopt-pet flex flex-col w-full">
          <AdoptSection />
        </div>
        <div className="post-pet flex flex-col w-full">
          <PostPetSection />
        </div>
      </div>
    </div>
  );
};

export default Services;
