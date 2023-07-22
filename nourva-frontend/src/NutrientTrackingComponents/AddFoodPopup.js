import React, { useState } from 'react';

const AddFoodPopup = ({ onClose, onAddFood }) => {
    const [foodName, setFoodName] = useState('');
    const [measurement, setMeasurement] = useState('');
    const [calories, setCalories] = useState('');

    const handleAddFood = () => {
        // Perform any validation or API calls here if needed
        // For this example, we'll just pass the foodName and measurement back to the parent component
        onAddFood(foodName, measurement, calories);
        onClose();
    };

    return (
        <div className="popup">
            <h2>Add a Food</h2>
            <form>
                <label>
                    Food Name:
                    <input type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)} />
                </label>
                <label>
                    Measurement in grams:
                    <input
                        type="number"
                        value={measurement}
                        onChange={(e) => setMeasurement(e.target.value)}
                    />
                    <label>
                        g
                    </label>
                </label>
                <label>
                    Calories:
                    <input
                        type="number"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                    <label>
                        cals
                    </label>
                </label>
                <div className="buttons">
                    <button type="button" onClick={handleAddFood}>
                        Add
                    </button>
                    <button type="button" onClick={onClose}>
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddFoodPopup;
