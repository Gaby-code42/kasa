import React, { useState } from "react";

const Carousel = ({ images }) => {
    console.log("Images:", images); // Vérifie les images ici
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const Next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const Previous = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="Carousel">
            <button onClick={Previous} className="Carousel__button__previous">{"<"}</button>
            <div className="Carousel__Images">
                {images.map((image, index) => (
                    <div key={index} className={`Carousel__Images_Unique ${index === currentIndex ? "active" : "inactive"}`}>
                        {index === currentIndex && <img src={image} alt={`Slide ${index + 1}`} />}
                    </div>
                ))}
            </div>
            <button onClick={Next} className="Carousel__button__Next">{">"}</button>
        </div>
    );
};

export default Carousel;

  
