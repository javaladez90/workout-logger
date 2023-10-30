import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';



function HomePage() {
    return (
        <div className='home-container'>
            <header>
                <h1>My Workout Tracker</h1>
                <p>Keep track of your workouts and monitor your progress over time.</p>
            </header>

            <div className='action-buttons'>
                <Link to='/log-workout' className='btn'>
                    Log a Workout 
                </Link>
                <Link to='/track-progress' className='btn'>
                    Track Progress
                </Link>
            </div>

            {/* OPTIONAL: Add som visual elements or images */}
            {/* <img src='/path-to-your-image.jpg alt='Fitness Image' /> */}
        </div>
    )
};
export default HomePage;