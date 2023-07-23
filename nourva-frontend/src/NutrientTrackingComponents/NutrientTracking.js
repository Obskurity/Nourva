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

    const [tableData, setTableData] = useState([]);

    const handleAddFood = (foodName, measurement, calories) => {
        // Handle the food addition logic here (e.g., API calls or updating state)
        axios.post("http://127.0.0.1:5000/add-food-to-database", {
            authorization: localStorage.getItem(LOCAL_STORAGE_KEY),
            foodName: foodName,
            measurement: measurement,
            calories: calories
          }).then((response) => {
            if(response.status === 200){
                // some success message
                let temp = tableData;
                temp = [ ...temp, {foodName: {calories: calories, measurement: measurement}}];
                setTableData(temp);
            }
            console.log(response);
          }); 
    };

    const LOCAL_STORAGE_KEY = "Nourva.AT";
    const reqLink = "http://127.0.0.1:5000/get-user-data";
    var flag = false;

    const [maxCalories, setMaxCalories] = useState('');
    const [currentCalories, setCurrentCalories] = useState('');

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
            setMaxCalories(response.data.tdee);
            setCurrentCalories( response.data.dailyCalories);
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
            <Header onAddFood={() => setShowPopup(true)} tableData={tableData}/>

            <div style={{ display: 'flex' }}>
                <QueryFood />

            </div>
            <div className='overlay'>
            {showPopup && <AddFoodPopup onClose={() => setShowPopup(false)} onAddFood={handleAddFood} />}
            </div>
        </div>
    )
}