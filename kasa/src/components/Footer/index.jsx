import LOGO from '../../Assets/LOGO.png'
import './style.scss'

function Footer(){
    return(
    <div>
        <div className='Container__Footer'>
            <img className='Container__Footer__Logo' src={LOGO} alt='Logo footer'/>
            <span className='Container__Footer__Content'>© 2020 Kasa. All right reserved</span>
        </div>
    </div>
    )
}


export default Footer