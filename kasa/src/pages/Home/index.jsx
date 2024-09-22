import './style.scss'
import Data from '../../Data/index.json'

function Home (){
    console.log(Data)
    return(
        <div className='Home'>
            <div className='Home__Container'>
                <div className='Home__Container__Banner'>
                    <h1 className='Home__Container__Content'>Chez vous, partout et ailleurs</h1>
                </div>
                
            </div>
        </div>
    )

}

export default Home