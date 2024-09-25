import React from "react";
import { useState } from "react";
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


function Accordion( {title, content}){
    const [open, setOpen] = useState(false)
    const [rotate,setRotate] = useState(false)
    
    const handleToggle = e => {
        setOpen(!open)
        setRotate(!rotate)
    }

    return(
    <div className='Accordion'>
        <div className="Accordion__Title" onClick={handleToggle}>
            {title}
            <FontAwesomeIcon 
            className={`TimeTo${rotate ?"__Rotate": ""}`}
            icon={faChevronUp} />
       </div>
        <div className={`Accordion__Content${open ? "__Open" : "__Hidden"}`}>{content}</div>
    </div>
    )
}

export default Accordion