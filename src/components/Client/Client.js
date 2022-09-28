import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Client.css'
const Client = () => {
    return (
        <div>
            <h3>Samrat Joydhar</h3>
            <h5>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                Khulna , Bangladesh.
            </h5>
            <div className='client-info-container'>
                <div className="client-info">
                    <h2>78<span>kg</span></h2>
                    <p>Weight</p>
                </div>
                <div className="client-info">
                    <h2>5.10<span>ft</span></h2>
                    <p>Height</p>
                </div>
                <div className="client-info">
                    <h2>23<span>yrs</span></h2>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Client;