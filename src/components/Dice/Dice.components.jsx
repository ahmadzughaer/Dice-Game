import React from 'react';
import './Dice.style.css';

const Dice =(props) =>{
    return (
    <div className='dice'>
        <img src={props.src1} alt='img'></img>
        <img src={props.src2} alt='img'></img>
    </div>
    )
}

export default Dice;