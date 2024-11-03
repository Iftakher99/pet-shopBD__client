import HomeLandingContainer from './HomeLandingContainer';
import CardBelowHome from './CardBelowHome';
import PlanningToAdoptAPet from './PlanningToAdoptAPet';
import HomeAdoptionBox from './ HomeAdoptionBox';
import Banner from './Banner/Banner';
import AdoptionSteps from './AdoptionSteps/AdoptionSteps';
import PetNews from './PetNews/PetNews';
import Faq from './Faq/Faq';
import Stats from './Stats/Stats';
const Home = (props) => {
  return (
    <>
      {/* <HomeLandingContainer description={props.description} /> */}
      <Banner />
      <HomeAdoptionBox />
      <AdoptionSteps />
      <PetNews />
      <CardBelowHome />
      <Faq />
      <Stats />
      <PlanningToAdoptAPet />
    </>
  );
};

export default Home;
