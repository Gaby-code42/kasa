import './style.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';


function Error (){

    const [mobile, setMobile] = useState(false);

    useEffect(() => {

        const CatchDimension = () => {
            setMobile(window.innerWidth < 600); 
        };

        CatchDimension(); 

        window.addEventListener('resize', CatchDimension); 
      
        return () => window.removeEventListener('resize', CatchDimension);
    }, []);

    return(
    <div className="ErrorContainer">
        <span className="ErrorContainer__Number">404</span>
        <span className='ErrorContainer__Content'>Oups! La page que {mobile ? <br /> : null} vous demandez n'existe pas.</span>
        <Link to='/' className='ErrorContainer__LinkHome'>Retournez sur la page d'accueil</Link>   
    </div>
    )
}

export default Error