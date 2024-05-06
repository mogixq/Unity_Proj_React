import React, { useState } from "react";

function Photos(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    '.\\images\\EG.png',
    '.\\images\\HP.png',
    '.\\images\\MP.png',
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <div>
      <button onClick={handlePrev}>Previous</button>
      <img src={photos[currentIndex]} alt={`Photo ${currentIndex}`} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Photos;
