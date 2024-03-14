import './Cart.css'
import PropTypes from 'prop-types';
const Card = ({ cart, handleRemove }) => {
    return (
        <div>

            <h4>cart : {cart.length}</h4>
            <div className="Cart">
                {cart.map(bottle => <div key={bottle.id} >
                     <img src={bottle.img}></img>
                     <button onClick={()=>handleRemove(bottle.id)}>Remove</button>
                     </div>)}
            </div>
        </div>
    );
};

Card.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default Card;