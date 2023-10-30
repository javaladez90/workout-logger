import React, { useState } from 'react';
import './WorkoutLogger.css';
import { Link } from 'react-router-dom';

function WorkoutLogger() {
    //State to hold the form input values
    const [workout, setWorkout] = useState({
        name: '',
        sets: 0,
        reps: 0,
        weight: 0
    });


    //State to hold the list of logged workouts
    const [workoutLog, setWorkoutLog] = useState([]);

    //Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWorkout(prevWorkout => ({ ...prevWorkout, [name]: value }));
    };

    //Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setWorkoutLog(prevLog => [...prevLog, workout]);
        //Reset the from after logging
        setWorkout({
            name: '',
            sets: 0,
            reps: 0,
            weight: 0
        });
    };

    return (
        
        <div className='workout-logger'>
            <Link to='/'>Return to Home</Link>
            <h2>Log Workout</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='workout-name'>Workout Name:</label>
                <input
                    type='text'
                    placeholder='Workout Name'
                    name='name'
                    value={workout.name}
                    onChange={handleInputChange}
                />
                <label htmlFor='workout-sets'>Sets:</label>
                <input 
                    type='number'
                    placeholder='Sets'
                    name='sets'
                    value={workout.sets}
                    onChange={handleInputChange}
                />
                <label htmlFor='workout-reps'>Reps:</label>
                <input 
                    type='number'
                    placeholder='Reps'
                    name='reps'
                    value={workout.reps}
                    onChange={handleInputChange}
                />
                <label htmlFor='workout-weight'>Weight (kg/lbs):</label>
                <input 
                    type='number'
                    placeholder='Weight'
                    name='weight'
                    value={workout.weight}
                    onChange={handleInputChange}
                />
                <button type='submit'>Log</button>
            </form>
            <div>
                <h3>Logged Workouts:</h3>
                <ul>
                    {workoutLog.map((w, index) => (
                        <li key={index}>
                            {w.name} - {w.sets} sets if {w.reps} reps at {w.weight} kg/lbs
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WorkoutLogger;