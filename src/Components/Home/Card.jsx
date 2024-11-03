// Card.js
const Card = ({ title, description, img }) => {
  return (
    <div className="bg-gradient-to-br from-[#6e62c6] to-[#4837c5] rounded-lg shadow-lg w-full max-w-sm mx-auto text-white p-6 transition-transform transform hover:scale-105 duration-300">
      {img && (
        <figure className="overflow-hidden rounded-t-lg">
          <img src={img} alt="" className="w-full h-48 object-cover" />
        </figure>
      )}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-base text-gray-100">{description}</p>
      </div>
    </div>
  );
};

export default Card;
