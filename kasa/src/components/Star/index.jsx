import inactiveStar from '../../Assets/star_inactive.png';
import activeStar from '../../Assets/star.png';
import Data from '../../Data/index.json'
import { useParams } from 'react-router-dom';

function StarRating (){
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
    const CardData = Data.find((Card) => Card.title === decodedTitle);
    const rating = CardData.rating;

    return (
    <div className='Housing__Container__Rating'>

    {[...Array(5)].map((_, index) => (
        <img
            key={index}
            src={index < rating ? activeStar : inactiveStar} 
            alt={`star-${index}`}
        />
    ))}
    </div>
)
}

export default StarRating