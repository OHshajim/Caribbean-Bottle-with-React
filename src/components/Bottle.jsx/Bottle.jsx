import './Bottle.css'

const Bottle = ({ bottle }) => {
    console.log(bottle);
    const { name, img, price } = bottle
    return (
        <div className='bottle'>
           <h2>Bottle : {name}</h2>
            <img src={img} alt="bottle" className='bottle-img' />
            <h4>Price : {price}<span className='money'>$</span></h4>
            <button className='btn'>Buy</button>
        </div>
    );
};

export default Bottle;