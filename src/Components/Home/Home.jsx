import HomeLandingContainer from './HomeLandingContainer';
import CardBelowHome from './CardBelowHome';
import PlanningToAdoptAPet from './PlanningToAdoptAPet';
import HomeAdoptionBox from './ HomeAdoptionBox';
const Home = (props) => {
  return (
    <>
      <HomeLandingContainer description={props.description} />
      <HomeAdoptionBox />
      <CardBelowHome />
      <PlanningToAdoptAPet />{' '}
    </>
  );
};

export default Home;
