import phnMockup from './3089582-cover-removebg-preview.png';

const AppCard = () => {
  return (
    <div className="w-full bg-violet-100 primaryLight h-full p-8 rounded-md my-10">
      {/* Main */}
      <header className="flex flex-col lg:flex-row gap-10 items-center lg:gap-0 lg:mt-3">
        <div className="text-center lg:text-left lg:max-w-lg">
          <h1 className="text-3xl lg:text-5xl leading-snug">
            Connecting hearts, one paw at a time!
          </h1>
          <p className="text-base lg:text-lg mt-4">
            Download our app to easily adopt pets and access essential pet
            services anytime, anywhere!
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
            <button className="px-4 py-2 bg-black rounded-md flex items-center gap-4">
              <img
                src="https://i.ibb.co/Tgmf5Nr/images-3.png"
                alt="Apple logo"
                className="w-7"
              />
              <div className="text-left">
                <span className="text-xs font-medium text-white block">
                  Download on the
                </span>
                <h3 className="text-lg font-medium text-white">App Store</h3>
              </div>
            </button>

            <button className="px-4 py-2 bg-black rounded-md flex items-center gap-4">
              <img
                src="https://i.ibb.co/s9dSrDs/download-2-removebg-preview-1.png"
                alt="Google Play logo"
                className="w-6"
              />
              <div className="text-left">
                <span className="text-xs font-medium text-white block">
                  Get it on
                </span>
                <h3 className="text-lg font-medium text-white">Google Play</h3>
              </div>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
          <img
            src={phnMockup}
            alt="Phone mockup showing app"
            className="w-[80%] lg:w-full h-auto max-h-[70vh] object-contain"
          />
        </div>
      </header>
    </div>
  );
};

export default AppCard;
