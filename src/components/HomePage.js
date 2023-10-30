import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';




function HomePage() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/auth/login');
    };

    const handleRegister = () => {
        navigate('/auth/register');
    };


    return (
        <div className='home-container'>
            <header>
                <h1>My Workout Tracker</h1>
                <nav>
                {/* Other navigation links here */}
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
                </nav>
                <p>Keep track of your workouts and monitor your progress over time.</p>
            </header>

            <div className='action-buttons'>
                <Link to='/log-workout' className='btn'>
                    Log a Workout 
                </Link>
                <Link to='/track-progress' className='btn'>
                    Track Progress
                </Link>
                <Link to='bmi-calculator' className='btn'>
                    Check Your BMI
                </Link>
            </div>

            {/* OPTIONAL: Add som visual elements or images */}
            {/* <img src='/path-to-your-image.jpg alt='Fitness Image' /> */}
        </div>
    )
};
export default HomePage;