import { useState } from 'react'
import CalorieProgressBar from './CalorieProgressBar'
import DatePicker from './DatePicker'
import Header from './Header'
import QueryFood from './DailyFoods'
import AddFoodPopup from './AddFoodPopup'

export default function NutrientTracking() {
    const [showPopup, setShowPopup] = useState(false);


    const handleAddFood = (foodName, measurement, calories) => {
        // Handle the food addition logic here (e.g., API calls or updating state)
        console.log('Food Name:', foodName);
        console.log('Measurement:', measurement);
        console.log('Calories:', calories);
    };

    return (
        <div>
            <Header onAddFood={() => setShowPopup(true)} />
            <div style={{ display: 'flex' }}>
                <QueryFood />
                <div>
                    <DatePicker />
                    <CalorieProgressBar goal={2000} consumed={1500} />
                </div>
            </div>
            {showPopup && <AddFoodPopup onClose={() => setShowPopup(false)} onAddFood={handleAddFood} />}
        </div>
    )
}
