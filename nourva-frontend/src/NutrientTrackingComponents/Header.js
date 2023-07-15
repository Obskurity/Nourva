import { useState, useEffect } from 'react';
import axios from 'axios';
import AddFoodPopup from './AddFoodPopup';

const Header = (onAddFood) => {
    const axios = require('axios');
    // Add logic to handle the search and display the search results in a table.
    const [searchResults, setSearchResults] = useState([])
    let tableData = [
        { name: 'Apple', calories: 52 },
        { name: 'Banana', calories: 96 },
        { name: 'Chicken Breast', calories: 165 },
        { name: 'Rice (cooked)', calories: 130 },
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
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((food, index) => (
                        <tr key={index}>
                            <td>{food.name}</td>
                            <td>{food.calories}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={onAddFood}>Add Food</button>
        </div>
    );
};

export default Header;