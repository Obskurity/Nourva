import { useState } from 'react';
import moment from 'moment';
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';

const DailyFoods = () => {
    // Add logic to fetch and display the list of foods the user has eaten for the day.
    const dateFormatString = "dddd MMMM D";
    const [pickedDate, setPickedDate] = useState(moment())
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDatePickerClick = () => {
        setShowDatePicker(!showDatePicker);
    };

    const handleDateChange = (newDate) => {
        setShowDatePicker(false);
        if (newDate.isValid()) {
            setPickedDate(newDate);
        }
    };

    const handlePreviousDate = () => {
        setPickedDate(pickedDate.subtract(1, 'day'));
    };

    const handleNextDate = () => {
        setPickedDate(pickedDate.add(1, 'day'));
    };

    return (
        <div>
            <button onClick={handlePreviousDate}>Previous</button>
            <h2 onClick={handleDatePickerClick}>{pickedDate.format(dateFormatString)}</h2>
            <button onClick={handleNextDate}>Next</button>
            {showDatePicker && (
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            onChange={handleDateChange}
                        />
                    </LocalizationProvider>
                </div>
            )}
            <ul>
                {/* Render the list of foods the user has eaten for the day */}
                {/* Each item should show the food name and its calories */}
            </ul>
        </div>
    );
};

export default DailyFoods;
