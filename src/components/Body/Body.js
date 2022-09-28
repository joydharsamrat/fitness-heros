import React, { useEffect, useState } from 'react';
import './Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity/Activity';

const Body = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='body'>
            <div className='activities-container'>
                <h1 className='title'> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> FitNess Heros</h1>
                <h2>Select today's exercise</h2>
                <div className='activities'>
                    {
                        activities.map(activity => <Activity key={activity.id} activity={activity}></Activity>)
                    }
                </div>
            </div>
            <div className='Current-activity'>
                <h1>Samrat</h1>
            </div>
        </div>
    );
};

export default Body;