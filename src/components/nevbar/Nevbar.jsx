import './Nevbar.css'
import logo from '../../assets/images/domino-logo.png'
import { GoThreeBars } from 'react-icons/go'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export const Nevbar = ({ showFav }) => {

    const favourate = useSelector(state => state.favourites)

    return(
        <div className="nevbar">
            <div className="left-side">
                    <GoThreeBars id='bar-icon'/>
                    <img src={logo} alt="" id='logo'/>
                    <h1 id="logo-text">Domino's&nbsp;Pizza</h1>
            </div>
            <div className="right-side">
                <div className="favourate" onClick={() => showFav(true)}>
                        <p id="fav-text">Favorite</p>
                        { favourate && favourate.length>0 &&
                        <p id="favourates-count">{ favourate.length }</p>}
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