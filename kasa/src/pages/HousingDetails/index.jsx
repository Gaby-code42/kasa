import React from "react"
import { useParams } from 'react-router-dom';
import Accordion from "../../components/Accordion"
import Data from '../../Data/index.json'
import Carousel from "../../components/Slider";
import './style.scss'


function HousingDetails (){
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
    const CardData = Data.find((Card) => Card.title === decodedTitle);
    const images = CardData ? CardData.pictures : [];

    console.log(images)

    //const previousImg = pictureNumber
    //const nextImg = pictureNumber

    return(
    
    <div>
        <div>
            <Carousel images={CardData.pictures} />        
        </div>

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


    )
}
            
            
        
    


export default HousingDetails