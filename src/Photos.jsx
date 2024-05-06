import React, { useState } from "react";

function Photos(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    ".\\images\\5.png",
    ".\\images\\4.png",
    ".\\images\\6.png",
    ".\\images\\7.png",
    ".\\images\\3.png",
    ".\\images\\2.png",
    ".\\images\\1.png",
    
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
    <div style={{minWidth:444}}>
      <button onClick={() => props.changeDarkMode()}>Dark mode on/off</button> <br />
      <h2>Photo Gallery</h2>
      <p>View photos from the game and it's development</p> <br />
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button> <br />
      <div
        style={{
          border: "2px solid purple",
          borderRadius: 10,
          maxWidth: 400,
          maxHeight: 250,
          padding:5,
          margin:'auto'
        }}
      >
        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex}`}
          style={{ borderRadius: 10,width:400,height:250 }}
        />
      </div>
      <p style={{color:'purple',fontWeight:'bold'}}>{currentIndex+1}/{photos.length}</p>
    </div>
  );
}

export default Photos;
