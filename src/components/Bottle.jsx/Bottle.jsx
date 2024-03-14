import PropTypes from 'prop-types'; 

import './Bottle.css'

function Bottle({ bottle, handleBuy }) {

    // console.log(bottle);
    const { name, img, price } = bottle;

    return (
        <div className='bottle'>
            <h2>Bottle : {name}</h2>
            <img src={img} alt="bottle" className='bottle-img' />
            <h4>Price : {price}<span className='money'>$</span></h4>
            <button className='btn' onClick={() => handleBuy(bottle)}>Add cart to Purchase</button>
        </div>
    );
}

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleBuy : PropTypes.func.isRequired
}
export default Bottle;
