import React, { useState, useEffect } from "react";
import "./WorkOut.css";

const WorkoutListTracker = () => {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState("");
  const [newSets, setNewSets] = useState("");
  const [newReps, setNewReps] = useState("");

  // Load workouts from localStorage on component mount
  useEffect(() => {
    const savedWorkouts = localStorage.getItem("workouts");
    if (savedWorkouts) {
      setWorkouts(JSON.parse(savedWorkouts));
    }
  }, []);

  // Save workouts to localStorage on changes
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const handleInputChange = (event) => {
    setNewWorkout(event.target.value);
  };

  const handleSetsChange = (event) => {
    setNewSets(event.target.value);
  };

  const handleRepsChange = (event) => {
    setNewReps(event.target.value);
  };

  const handleAddWorkout = () => {
    if (newWorkout !== "" && newSets !== "" && newReps !== "") {
      const newWorkoutObj = {
        workout: newWorkout,
        sets: newSets,
        reps: newReps
      };
      setWorkouts([...workouts, newWorkoutObj]);
      setNewWorkout("");
      setNewSets("");
      setNewReps("");
    }
  };

  const handleRemoveWorkout = (index) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(index, 1);
    setWorkouts(updatedWorkouts);
  };

  return (
    
    <div className="workout-tracker" id="workout">
      
      <h1 className="workout-tracker__title">Build Your Workout</h1>
      <form className="workout-tracker__form">
        <input
          className="workout-tracker__input"
          type="text"
          value={newWorkout}
          onChange={handleInputChange}
          placeholder="Name of excerise"
        />
        <input
          className="workout-tracker__input"
          type="number"
          value={newSets}
          onChange={handleSetsChange}
          placeholder="Number of sets"
        />
        <input
          className="workout-tracker__input"
          type="number"
          value={newReps}
          onChange={handleRepsChange}
          placeholder="Number of reps"
        />
        <button
          className="workout-tracker__button"
          type="button"
          onClick={handleAddWorkout}
        >
          Add Workout
        </button>
      </form>
      <ul className="workout-tracker__list">
        {workouts.map((workout, index) => (
          <li key={index} className="workout-tracker__list-item">
            <span className="workout-tracker__workout"> {workout.workout}</span>
            <span className="workout-tracker__sets">Sets: {workout.sets}</span>
            <span className="workout-tracker__reps">Reps: {workout.reps}</span>
            <button
              className="workout-tracker__remove-button"
              onClick={() => handleRemoveWorkout(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutListTracker;
