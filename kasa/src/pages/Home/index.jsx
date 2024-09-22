import Banniere from '../../Assets/eric.png'
import './style.css'
import Data from '../../Data/index.json'

function Home (){
    console.log(Data)
    return(
        <div className='Home'>
            <div>
                <img className='Home__Banniere' src={Banniere} alt="paysage bord de mer"/>
                <h1 className='Home__BanniereContent'>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )

}

export default Home