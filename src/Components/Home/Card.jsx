const Card = ({ title, description, img }) => {
  return (
    <div className="card bg-gradient-to-r from-[#8f89c2] to-[#4837c5] w-96 shadow-xl text-white">
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
