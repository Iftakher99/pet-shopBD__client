import girlHoldingADog from './images/womenwithdog.png';
import homepageDog from './images/homepageDog.png';

const HomeLandingContainer = (props) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-2  ">
        <div className="col-span-1 w-full p-8 md:p-4 ">
          <div className="flex flex-col w-full ">
            <h1 className=" text-5xl md:text-7xl">
              <div className="home-titlePlusPng">
                <p>One more friend </p>
                <img src={homepageDog} alt="Dog sitting" />
              </div>
              Thousands more fun!
            </h1>
            <br />

            <h3 className="text-wrap text-xl text-justify md:w-3/4">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </h3>
            <p className="mt-5 md:w-3/4 text-justify">{props.description}</p>
          </div>
        </div>
        <div className="col-span-1 h-full w-full ">
          <img src={girlHoldingADog} alt="Girl holding a Dog" />
        </div>
      </div>
    </>
  );
};

export default HomeLandingContainer;
