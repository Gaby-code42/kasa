import React, { useState } from "react";

const Carousel = ({ images }) => {

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

                <img 
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="Carousel__Image"
                />
            
            <button onClick={Next} className="Carousel__button__Next">{">"}</button>
            <span>{currentIndex+1}/{images.length}</span>
        </div>



        
    );
};

export default Carousel;

  
