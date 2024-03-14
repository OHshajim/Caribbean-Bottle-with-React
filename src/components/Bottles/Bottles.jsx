import { useState } from 'react';
import './Bottles.css'
import { useEffect } from 'react';
import Bottle from '../Bottle.jsx/Bottle';

const Bottles = () => {
    const [Bottles, setBottles] = useState([])
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('../../../public/bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    const handleBuy = (bottle) => {
        const NewCard =[...card,bottle]
        setCard(NewCard)
    }

    return (
        <div>
            <h4>Bottles : {Bottles.length}</h4>
            <h4>card : {card.length}</h4>
            <div className='bottles-container'>
                {
                    Bottles.map(bottle => <Bottle key={bottle.id} handleBuy={handleBuy} bottle={bottle} ></Bottle>)
                }
            </div>
        </div>
    );
}


export default Bottles;