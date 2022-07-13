import './Nevbar.css'
import logo from '../../assets/images/domino-logo.png'
import { GoThreeBars } from 'react-icons/go'
import { FaUserCircle } from 'react-icons/fa'

export const Nevbar = () => {
    return(
        <div className="nevbar">
            <div className="left-side">
                    <GoThreeBars id='bar-icon'/>
                    <img src={logo} alt="" id='logo'/>
                    <h1 id="logo-text">Domino's&nbsp;Pizza</h1>
            </div>
            <div className="right-side">
                <div className="choose-option">
                    <input type="checkbox"id='delivery'/>
                    <label htmlFor="delivery">Delivery</label>
                    <input type="checkbox"id='pickup'/>
                    <label htmlFor="pickup">Pick Up/Dine-in</label>
                </div>
                <div className="user-profile">
                    <FaUserCircle id='user-logo'/>
                    <div className="login">
                        <p id="account">MY ACCOUNT</p>
                        <p id="login-signup">Login  |  Signup</p>
                    </div>
                </div>
            </div>
        </div>
    )
}