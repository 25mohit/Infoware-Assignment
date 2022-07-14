import './Success.css'
import { CgClose } from 'react-icons/cg'

export const Success = ({ setCheckout }) => {
    return(
        <div className="success">
            <div className="container-success">
                <div className="header-success">
                    <CgClose id='close-modal' onClick={() => setCheckout(false)}/>
                </div>
                <div className="message">
                    <h1 id="message-text">order placed !!!</h1>
                    <h1 id="message-text"> thank you for buying from us...<span>☺️</span></h1>
                </div>
            </div>
        </div>
    )
}