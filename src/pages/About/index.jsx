import React from "react"
import Accordion from "../../components/Accordion"
import './style.scss'


function About (){

return(
<div className="About">
    <div className="About__Banner"></div>
    
    <Accordion title="Fiabilité" content="Les annonces postées sur KASA garantissent une fiabilité totale.Les photos sont conformes au logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
    <Accordion title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
    <Accordion title="Service" content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."/>
    <Accordion title="Sécurité" content="La sécurite est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bienà l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont vien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>

    
</div>
)
}

export default About