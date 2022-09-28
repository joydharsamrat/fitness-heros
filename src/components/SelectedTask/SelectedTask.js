import React, { useEffect, useState } from 'react';
import './SelectedTask.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SelectedTask = ({ exerciseTime }) => {

    const addBreak = (time) => {
        localStorage.setItem('time', time)
        setBreakTime(time)
    };

    const [breakTime, setBreakTime] = useState(0);

    useState(() => {
        const addedTime = localStorage.getItem('time');

        setBreakTime(addedTime);
    }, [])




    const AddedToast = () => {
        toast("congratulations!!! Today's exercise is completed!!", { position: "top-center" })
    }
    return (
        <div>
            <h3>Add a break </h3>
            <div className='break-btn-container'>
                <button onClick={() => addBreak(2)} className='break-btn'>2<span>m</span></button>
                <button onClick={() => addBreak(5)} className='break-btn'>5<span>m</span> </button>
                <button onClick={() => addBreak(10)} className='break-btn'>10<span>m</span> </button>
                <button onClick={() => addBreak(15)} className='break-btn'>15<span>m</span> </button>
            </div>
            <h3>Exercise Details</h3>
            <div className='exercise-time'>
                <p>Exercise Time</p>
                <small><span>{exerciseTime}</span>m</small>
            </div>
            <div className='exercise-time'>
                <p>Break time</p>
                <small><span>{breakTime}</span>m</small>
            </div>

            <button onClick={AddedToast} className='complete-btn'>Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default SelectedTask;