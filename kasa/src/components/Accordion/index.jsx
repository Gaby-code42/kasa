import React, { useState, useRef, useEffect } from "react";
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");  
  const [opacity, setOpacity] = useState(0); 

 
  useEffect(() => {
    if (open) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
      setOpacity(1);
    } else {
      setMaxHeight("0px");
      setOpacity(0);
    }
  }, [open]);


  const handleToggle = () => {
    setOpen(!open);
    setRotate(!rotate); 
  };

  return (
    <div className='Accordion'>
      <div className="Accordion__Title">
        {title}
        <FontAwesomeIcon
          className={`TimeTo${rotate ? "__Rotate" : ""}`} 
          icon={faChevronUp}
          onClick={handleToggle}
        />
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: maxHeight, 
          opacity: opacity, 
          transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",  
        }}
        className="Accordion__Content"
      >
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Accordion;