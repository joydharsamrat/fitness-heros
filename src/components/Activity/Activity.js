import React from 'react';
import './Activity.css'

const Activity = ({ activity, handelAddToList }) => {
    const { name, img, details, time } = activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{details.length > 80 ? details.slice(0, 80) + '...' : details}</p>
            <h4>Time required : {time}min.</h4>
            <button onClick={() => handelAddToList(activity)}>Add to list</button>
        </div>
    );
};

export default Activity;