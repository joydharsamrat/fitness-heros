import React, { useEffect, useState } from 'react';
import './Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity/Activity';
import Client from '../Client/Client';
import SelectedTask from '../SelectedTask/SelectedTask';

const Body = () => {
    const [activities, setActivities] = useState([]);

    const [exerciseTime, setExerciseTime] = useState([]);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
            .catch(err => console.log(err))
    }, [])

    const handelAddToList = (activity) => {
        const currentExerciseTime = +(exerciseTime) + +(activity.time);
        setExerciseTime(currentExerciseTime);
    }

    return (
        <div className='body'>
            <div className='activities-container'>
                <h1 className='title'> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> FitNess Heros</h1>
                <h2>Select today's exercise</h2>
                <div className='activities'>
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            handelAddToList={handelAddToList}
                        ></Activity>)
                    }
                </div>
            </div>
            <div className='Current-activity'>
                <Client></Client>
                <SelectedTask exerciseTime={exerciseTime}></SelectedTask>
            </div>
        </div>
    );
};

export default Body;