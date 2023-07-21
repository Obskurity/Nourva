import React, { useState } from 'react';
import './UserInitiation.css';

export default function UserInitiation() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bodyFat, setBodyFat] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform further processing or validation
    // ...

    // Display the input values (optional)
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Sex: ${sex}`);
    console.log(`Height: ${height}`);
    console.log(`Weight: ${weight}`);
    console.log(`Body Fat: ${bodyFat}`);
    console.log(`Activity Level: ${activityLevel}`);
    console.log(`Goal: ${goal}`);

    // Reset the form (optional)
    setFirstName('');
    setLastName('');
    setAge('');
    setSex('');
    setHeight('');
    setWeight('');
    setBodyFat('');
    setActivityLevel('');
    setGoal('');
  };

  const handleReset = () => {
    // Reset the form
    setFirstName('');
    setLastName('');
    setAge('');
    setSex('');
    setHeight('');
    setWeight('');
    setBodyFat('');
    setActivityLevel('');
    setGoal('');
  };

  return (
    <div className="parent">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="box">
            <h1>First Time User</h1>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              
            />

            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              pattern="[1-9]|[1-9][0-9]|100"
              inputMode="numeric"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              
            />

            <label htmlFor="sex">Sex:</label>
            <select
            id="sex"
            value={sex}
            onChange={(event) => setSex(event.target.value)}
            
            >
            <option value="">Select sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="unspecified">Don't want to answer</option>
            </select>

            <label htmlFor="height">Height (centimeters):</label>
            <input
              type="text"
              id="height"
              pattern="[0-9]+"
              inputMode="numeric"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              
            />

            <label htmlFor="weight">Weight (kgs):</label>
            <input
              type="text"
              id="weight"
              pattern="[0-9]+(\.[0-9]+)?"
              inputMode="numeric"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              
            />

            <label htmlFor="bodyFat">Body Fat (%):</label>
            <input
              type="text"
              id="bodyFat"
              pattern="[0-9]+(\.[0-9]+)?"
              inputMode="numeric"
              value={bodyFat}
              onChange={(event) => setBodyFat(event.target.value)}
            />

            <label htmlFor="activityLevel">Activity Level:</label>
            <select
            id="activityLevel"
            value={activityLevel}
            onChange={(event) => setActivityLevel(event.target.value)}
            >
            <option value="">Select activity level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="very high">Very High</option>
            </select>


            <label htmlFor="goal">Goal:</label>
            <select
              id="goal"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
              
            >
              <option value="">Select a goal</option>
              <option value="gain weight">Gain Weight</option>
              <option value="lose weight">Lose Weight</option>
              <option value="maintain">Maintain</option>
              <option value="undetermined">Undetermined</option>
            </select>

            <div className="button-container">
              <button type="submit">Submit</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


