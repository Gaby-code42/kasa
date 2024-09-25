import './style.scss'
import Data from '../../Data/index.json'
import { Link } from 'react-router-dom'

function Home (){    
    const HousingCard = Data.map((card) => {
    const encodedTitle = encodeURIComponent(card.title);

    return (
        <li key={card.id}>
            <Link to={`/housing/${encodedTitle}`}>
                <img src={card.cover} alt={card.title} />
                <h2 className='Home__Container__Cards__Title'>{card.title}</h2>
            </Link>
        </li>
    );
});
    return(
        <div className='Home'>
            <div className='Home__Container'>
                <div className='Home__Container__Banner'>
                    <h1 className='Home__Container__Content'>Chez vous, partout et ailleurs</h1>
                </div>
                <div className='Home__Container__Cards'>
                    <ul className='Home__Container__Cards__List'>
                    {HousingCard}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Home