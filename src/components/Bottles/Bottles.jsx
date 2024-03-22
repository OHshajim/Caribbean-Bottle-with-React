import { useState } from 'react';
import './Bottles.css'
import { useEffect } from 'react';
import Bottle from '../Bottle.jsx/Bottle';
import { addToLS, getStoredCart, removeToLS } from '../../Utilites/Localstorage';
import Card from '../card/Card';

const Bottles = () => {
    const [Bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // load carts from local storage 
    useEffect(() => {
        if (Bottles.length) {
            const storedCard = getStoredCart()
            // console.log(storedCard ,Bottles);
            const saveCart = []
            for (const id of storedCard) {
                // console.log(id);
                const bottle = Bottles.find(bottle => bottle.id === id)
                if (bottle){
                    saveCart.push(bottle)
                }
            }
            console.log(saveCart);
            setCart(saveCart)
        }

    }, [Bottles])



    const handleBuy = (bottle) => {
        const NewCart = [...cart, bottle]
        setCart(NewCart)
        addToLS(bottle.id)
    }

    const handleRemove = id =>{
        const remaining = cart.filter(bottle=>bottle.id!==id)
        setCart(remaining)
        removeToLS(id)
    }

    return (
        <div>
            <h4>Bottles : {Bottles.length}</h4>
            <Card cart={cart} handleRemove={handleRemove}></Card>
            <div className='bottles-container'>
                {
                    Bottles.map(bottle => <Bottle key={bottle.id} handleBuy={handleBuy} bottle={bottle} ></Bottle>)
                }
            </div>
        </div>
    );
}


export default Bottles;