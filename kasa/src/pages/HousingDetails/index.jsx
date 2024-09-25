import React from "react"
import { useParams } from 'react-router-dom';
import Accordion from "../../components/Accordion"
import Data from '../../Data/index.json'
import Carousel from "../../components/Slider";
import StarRating from "../../components/Star";
import SplitName from "../../components/SplitName";
import './style.scss'



function HousingDetails (){
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);

    const CardData = Data.find((Card) => Card.title === decodedTitle);

    const hostName = CardData.host?.name;
    const hostPicture = CardData.host?.picture;

    console.log(CardData)
    
    

    return(
    <div className="Housing">
        
        <Carousel images = {CardData.pictures} />  
            
        <div className="Housing__Container">
            
        <div className="Housing__Container__Title">
            <h2>{title}</h2>
            <p>{CardData.location}</p>
        </div>
        <div className="Housing__Container__SellerProfil">
            <SplitName host={{ name: hostName }} />
            <img src={hostPicture} alt={hostPicture}/>
        </div>
        </div>

        <div className="Housing__Container__TagsRating">
        <div className="Housing__Container__Tags">
            {CardData.tags.map((tag, index) => (
                <span key={index}>
                    {tag}
                </span>
            ))}
        </div>                
            <StarRating />
        </div>

        <div className="Housing__Container__Accordion" >
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