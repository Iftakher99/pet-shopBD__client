const Card = ({ title, description, img }) => {
  return (
    <div className="card bg-gradient-to-r from-[#21574b] to-[#67b476] w-96 shadow-xl text-white">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
      {img && (
        <figure>
          <img src={img} alt="" />
        </figure>
      )}
    </div>
  );
};

export default Card;
