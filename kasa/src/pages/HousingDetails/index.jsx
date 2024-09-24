import React from "react"
import { useParams } from 'react-router-dom';
import Accordion from "../../components/Accordion"
import Data from '../../Data/index.json'
import Carousel from "../../components/Slider";
import StarRating from "../../components/Star";
import './style.scss'



function HousingDetails (){
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
    const CardData = Data.find((Card) => Card.title === decodedTitle);
    const hostName = CardData.host?.name;
    const hostPicture = CardData.host?.picture;
    

    return(
    <div>
        
        <Carousel images = {CardData.pictures} />        


        <div className="Housing__Title">
            <h2>{title}</h2>
            <p>{CardData.location}</p>
        </div>
        <div className="Housing__SellerProfil">
            <h3>{hostName}</h3>
            <img src={hostPicture} alt={hostPicture}/>
        </div>
        <div className="Housing__Tag">
            {CardData.tags.map((tag, index) => (
                <span key={index} classname='tags'>
                    {tag}
                </span>
            ))}
        </div>
            <StarRating className="Housing__Rating"/>
        <div>
            <Accordion title="Description" content={CardData.description}/>
            <Accordion title="Équipements" content={
                <ul>
                    {CardData.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
                }
            />
        </div>
    </div>


    )
}
            

export default HousingDetails