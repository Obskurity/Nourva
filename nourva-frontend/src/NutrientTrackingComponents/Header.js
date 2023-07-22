import { useState, useEffect } from 'react';
import axios from 'axios';
import AddFoodPopup from './AddFoodPopup';

const Header = (onAddFood) => {
    const axios = require('axios');
    // Add logic to handle the search and display the search results in a table.
    const [searchResults, setSearchResults] = useState([])
    let tableData = [
        { name: 'Apple', measurement: 5, calories: 52 },
        { name: 'Banana', measurement: 5, calories: 96 },
        { name: 'Chicken Breast', measurement: 5, calories: 165 },
        { name: 'Rice (cooked)', measurement: 5, calories: 130 },
    ];

    // useEffect(() => {
    //     tableData = queryAllMongoFood();
    // }, [])

    const queryAllMongoFood = () => {
        // axios.get
    }

    const handleSearch = (query) => {
        const results = tableData.filter((food) =>
            food.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
    };

    // const handleAddFood = () => {

    // }
    return (
        <div>
            {/* Search bar */}
            <input type="text" placeholder="Search for foods..." onChange={(e) => handleSearch(e.target.value)} />
            {/* Table to display search results */}
            {/* Table headers */}
            {/* <button name="addFood" type="submit" value="Add a Food" onClick={handleAddFood} /> */}
            <table>
                <thead>
                    <tr>
                        <th>Food</th>
                        <th>Measurement</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((food, index) => (
                        <tr key={index}>
                            <td>{food.name}</td>
                            <td>{food.measurement} g</td>
                            <td>{food.calories} cals</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={onAddFood.onAddFood}>Add Food</button>
        </div>
    );
};

export default Header;
