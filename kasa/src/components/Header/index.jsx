import { Link, useLocation} from 'react-router-dom'
import LOGO from '../../Assets/LOGO.png'
import './style.scss'

function Header (){
    const location = useLocation();
    return(
        <div className='NavContainer'>
        <Link to="/">
        <img className='NavContainer__Logo' src={LOGO} alt='Logo accueil link'/>
        </Link>
        <div>
            <Link to='/' className={`NavContainer__Link ${location.pathname === '/' ? 'active-link' : ''}`}>
            Accueil
            </Link>
            <Link to='about' className={`NavContainer__Link ${location.pathname === '/about' ? 'active-link' : ''}`}>
            A Propos
            </Link>            
        </div>
        
        </div>
    )
}

export default Header