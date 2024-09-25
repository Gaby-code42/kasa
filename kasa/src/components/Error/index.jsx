import './style.scss'
import { Link } from 'react-router-dom'


function Error (){

    return(
    <div className="ErrorContainer">
        <span className="ErrorContainer__Number">404</span>
        <span className='ErrorContainer__Content'>Oups! La page que vous demandez n'existe pas.</span>
        <Link to='/' className='ErrorContainer__LinkHome'>Retournez sur la page d'accueil</Link>   
    </div>
    )
}

export default Error