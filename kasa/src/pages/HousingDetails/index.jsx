import React from "react"
import { useParams } from 'react-router-dom';
import Accordion from "../../components/Accordion"
import Data from '../../Data/index.json'
import Carousel from "../../components/Slider";
import StarRating from "../../components/Star";
import SplitName from "../../components/SplitName";
import Error from "../../components/Error";
import './style.scss'



function HousingDetails (){
    const { id } = useParams();
    const decodedTitle = decodeURIComponent(id);
    const CardData = Data.find((Card) => Card.id === decodedTitle);

    if (!CardData) {
        return (<Error/>)
    }

    const hostName = CardData.host?.name;
    const hostPicture = CardData.host?.picture;
    
    return(
    <div className="Housing">
        
        <Carousel images = {CardData.pictures} />  
                 
        <div className="Housing__Title">
            <h2>{CardData.title}</h2>
            <p>{CardData.location}</p>
        </div>

        <div className="Housing__SellerProfil">
            <SplitName host={{ name: hostName }} />
            <img src={hostPicture} alt={hostPicture}/>
        </div>

        <div className="Housing__Tags">
            {CardData.tags.map((tag, index) => (
                <span key={index}>
                    {tag}
                </span>
            ))}
        </div> 

            <StarRating />
            
            <div className="Container__Accordion">
            <Accordion  title="Description" content={CardData.description}/>
            <Accordion  title="Équipements" content={
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