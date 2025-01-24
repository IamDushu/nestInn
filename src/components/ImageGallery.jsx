import React, { useState } from "react";

const ImageGallery = ({ imageNumbers }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Track index of selected image

  const handlePrev = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(imageNumbers.length - 1); // Loop to the last image
    }
  };

  const handleNext = () => {
    if (selectedImageIndex < imageNumbers.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    } else {
      setSelectedImageIndex(0); // Loop to the first image
    }
  };

  return (
    <div>
      {/* Image Grid */}
      <div className="columns-1 lg:columns-4 gap-4 space-y-4 py-10">
        {imageNumbers.map((number, index) => (
          <div key={number} className="h-min w-full">
            <img
              src={`/images/${number}.jpeg`}
              alt={`Image ${number}`}
              className="cursor-pointer"
              onClick={() => setSelectedImageIndex(index)} // Open modal with selected index
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedImageIndex(null)} // Close modal on backdrop click
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-[90%] max-h-[90%]"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            {/* Close Button */}
            <button
              className="absolute top-1 right-1 text-white bg-black bg-opacity-60 rounded-full px-3 py-1"
              onClick={() => setSelectedImageIndex(null)} // Close modal
            >
              ✕
            </button>

            {/* Image Display */}
            <img
              src={`/images/${imageNumbers[selectedImageIndex]}.jpeg`}
              alt={`Image ${imageNumbers[selectedImageIndex]}`}
              className="w-full h-full object-contain min-h-[400px] max-h-[600px]"
            />

            {/* Left Arrow */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white rounded-full p-2 px-3"
              onClick={handlePrev}
            >
              ←
            </button>

            {/* Right Arrow */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white rounded-full p-2 px-3"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
