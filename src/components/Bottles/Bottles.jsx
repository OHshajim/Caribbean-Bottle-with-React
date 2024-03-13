import { useState } from 'react';
import './Bottles.css'
import { useEffect } from 'react';
import Bottle from '../Bottle.jsx/Bottle';

const Bottles = () => {
    const [Bottles ,setBottles]= useState([])
    useEffect(()=>{
        fetch('../../../public/bottle.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    return (
        <div >
            <h4>Bottles : {Bottles.length}</h4>
        <div className='bottles-container'>
        {
                Bottles.map(bottle =><Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
        </div>
    );
};

export default Bottles;