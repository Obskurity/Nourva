import { useState } from 'react'
import CalorieProgressBar from './CalorieProgressBar'
import Header from './Header'
import QueryFood from './DailyFoods'
import AddFoodPopup from './AddFoodPopup'
import './NutrientTracking.css'
import ProgressBar from "@ramonak/react-progress-bar";
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
            <div className='progressContainer'>
                <ProgressBar
                    completed={75}
                    customLabel= {2000}
                    maxCompleted={100}
                    bgColor='#f1356d'
                   
                   />
            </div>
            <Header onAddFood={() => setShowPopup(true)} />

            <div style={{ display: 'flex' }}>
                <QueryFood />

            </div>
            <div className='overlay'>
            {showPopup && <AddFoodPopup onClose={() => setShowPopup(false)} onAddFood={handleAddFood} />}
            </div>
        </div>
    )
}