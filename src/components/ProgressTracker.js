import React from 'react';
import { Link } from 'react-router-dom';


function ProgressTracker() {
    return (
        <div className='return-home'>
            <h1>Progress Tracker</h1>
            <Link to='/'>Return To HomePage</Link>
        </div>
    )
};
export default ProgressTracker;