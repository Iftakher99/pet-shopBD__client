import AdoptSection from './AdoptSection';
import PostPetSection from './PostPetSection';

const Services = () => {
  return (
    <div className="main-container bg-gradient-to-b from-white via-gray-50 to-blue-100 grid grid-cols-1 md:grid-cols-2">
      <div className="adopt-pet">
        <AdoptSection />
      </div>
      <div className="post-pet">
        <PostPetSection />
      </div>
    </div>
  );
};

export default Services;
