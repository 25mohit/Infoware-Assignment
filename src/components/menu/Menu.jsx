import { pizzaData } from '../../assets/MOC_DATA/pizzaData'
import { PizzaCard } from '../pizzaCard/PizzaCard'
import './Menu.css'

export const Menu = () => {
    return(
        <div className="menu">
            {
                pizzaData.map(pizza => <PizzaCard key={ pizza.id } data={ pizza }/>)
            }
        </div>
    )
}