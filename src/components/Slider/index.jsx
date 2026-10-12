import React, { useState } from "react";
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

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
            <button onClick={Previous} className="Carousel__Button__Previous"><FontAwesomeIcon icon={faChevronLeft} /></button>

                <img 
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="Carousel__Image"
                />
            
            <button onClick={Next} className="Carousel__Button__Next"><FontAwesomeIcon icon={faChevronRight} /></button>
            <span className="Carousel__indicatorImage">{currentIndex+1}/{images.length}</span>
        </div>



        
    );
};

export default Carousel;

  
