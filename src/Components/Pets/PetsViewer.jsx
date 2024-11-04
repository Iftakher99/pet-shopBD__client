import { useState } from 'react';
import AdoptForm from '../AdoptForm/AdoptForm';
import { formatDistanceToNow } from 'date-fns';

const PetsViewer = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const formatTimeAgo = (updatedAt) => {
    const date = new Date(updatedAt);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  return (
    <div className="pet-view-card flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="pet-card-pics">
        <img
          src={`https://pet-shopbd-server.onrender.com/images/${props.pet.filename}`}
          alt={props.pet.name}
          className="w-full h-48 object-cover md:h-56 lg:h-64"
        />
      </div>

      <div className="pet-card-details p-4 flex-grow">
        <h2 className="text-xl font-bold">{props.pet.name}</h2>
        <p>
          <b>Type:</b> {props.pet.type}
        </p>
        <p>
          <b>Age:</b> {props.pet.age}
        </p>
        <p>
          <b>Location:</b> {props.pet.area}
        </p>
        <p className="text-gray-500">{formatTimeAgo(props.pet.updatedAt)}</p>
      </div>
      <div className="show-interest-btn p-4">
        <button
          onClick={togglePopup}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300 flex items-center"
        >
          Show Interest <i className="fa fa-paw ml-2"></i>
        </button>
      </div>
      {showPopup && (
        <div className="popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="popup-content bg-white rounded-lg p-6 shadow-lg">
            <AdoptForm closeForm={togglePopup} pet={props.pet} />
            <button
              onClick={togglePopup}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-300"
            >
              Close <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetsViewer;
