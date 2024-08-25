import React from 'react';

const DateInput = ({ value, onChange }) => {

    // const handleDateChange = (e) => {
    //     const selectedDate = e.target.value;
    //     // Create a new event object with the selected date
    //     const syntheticEvent = {
    //         target: {
    //             value: selectedDate
    //         }
    //     };
    //     onChange(syntheticEvent);
    //     onFormChange(syntheticEvent);
    // };

    const handleDateChange = (e) => {
        onChange(e);  // Call the onChange prop passed from useForm to update the state
        // onFormChange(); // Directly call the onFormChange function to validate the form
    };

    return (
        <label className="block mb-2">
            Birth Date:
            <input
                type="date"
                value={value}
                onChange={handleDateChange}
                onInput={handleDateChange}
                required
                className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"
            />
        </label>
    )
};

export default DateInput;