import React from "react";

const AdvertisementCard = ({ advertisement }) => {
  if (!advertisement) {
    console.log('Error: Advertisement Data Not Loaded');
    return (
      <>
      </>
    );
  }

  const { image, title, description, price } = advertisement;

  const showDetails = () => {
    alert(`Contact: ${advertisement.contact}`);
  };

  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-gray-600 text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-lg font-bold mt-2">{price} kr</p>
      <p className="border-b my-2"></p>
      <div className="md:flex md:justify-center">
      <button
        onClick={showDetails}
        className="bg-customCyanTeal text-white p-2 mt-2 rounded-md inline-flex items-center">
        Details
      </button>
      </div>
    </div>
  );
};

export default AdvertisementCard;