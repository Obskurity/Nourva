import { useState } from 'react'
import CalorieProgressBar from './CalorieProgressBar'
import Header from './Header'
import QueryFood from './DailyFoods'
import AddFoodPopup from './AddFoodPopup'
import './NutrientTracking.css'
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";

export default function NutrientTracking() {
    const [showPopup, setShowPopup] = useState(false);


    const handleAddFood = (foodName, measurement, calories) => {
        // Handle the food addition logic here (e.g., API calls or updating state)
        console.log('Food Name:', foodName);
        console.log('Measurement:', measurement);
        console.log('Calories:', calories);
    };

    const LOCAL_STORAGE_KEY = "Nourva.AT";
    const reqLink = "http://127.0.0.1:5000/get-user-data";
    var flag = false;

    var maxCalories;
    var currentCalories;
    var data;

    axios.get(reqLink, {
        params: {
            authorization: localStorage.getItem(LOCAL_STORAGE_KEY)
        }
      }).then((response) => {
        if(response.status === 200){
            data = response.data;
            console.log(response.data);
            flag = true;
            maxCalories = response.data.tdee;
            currentCalories = response.data.dailyCalories;  
        }
        console.log(response);
      });

    return (
        <div>
            <div className='progressContainer'>
                <ProgressBar
                    completed={currentCalories}
                    customLabel= {currentCalories}
                    maxCompleted={maxCalories}
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