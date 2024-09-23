import React from "react";
import { useState } from "react";
import './style.scss'

function Accordion( {title, content}){
    const [open, setOpen] = useState(false)
    
    const handleToggle = e => {
        setOpen(!open)
    }

    return(
    <div className={`accordion ${open && "open"}`}>
        <div className="Accordion-title" onClick={handleToggle}>{title}{open? '-':'+'}</div>
        <div className="Accordion-content">{content}</div>
    </div>
    )
}

export default Accordion