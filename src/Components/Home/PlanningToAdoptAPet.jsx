// PlanningToAdoptAPet.js
import Card from './Card';

const PlanningToAdoptAPet = () => {
  return (
    <section className="py-10 px-6 bg-gradient-to-b from-[#e8eaff] to-[#c3c7f5]">
      <h3 className="text-3xl font-bold text-[#3c3988] w-full my-6 text-center">
        Thinking of Adopting a Pet?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card
          title="The Joy of Pet Adoption"
          description="Welcoming a pet into your life can be one of the most fulfilling experiences. Not only do you gain a loyal companion, but you also give an animal a second chance at a happy home. It's a bond that can change your life."
        />
        <Card
          title="Your Guide to Pet Adoption"
          description="Considering a new furry friend? Adopting a pet is a heartwarming choice. While it takes some research and planning to find the perfect match, the love and joy you'll share are beyond measure."
        />
        <Card
          title="The Healing Power of Pets"
          description="Pets offer so much more than companionship. They bring healing energy into our lives, boosting emotional well-being and even helping with physical health. The bond with a pet can be truly transformative."
        />
      </div>
    </section>
  );
};

export default PlanningToAdoptAPet;
