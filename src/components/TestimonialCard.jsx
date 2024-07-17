import React from "react";

const TestimonialCard = ({ quote, name, role, imageUrl }) => {
  return (
    <div className="max-w-lg my-5 mx-auto bg-gray-700 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 text-white">
        <blockquote className="italic text-lg mb-4">"{quote}"</blockquote>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full"
              src={imageUrl}
              alt={`${name}'s Avatar`}
            />
          </div>
          <div className="ml-3">
            <p className="font-bold">{name}</p>
            <p className="text-gray-500 uppercase text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
