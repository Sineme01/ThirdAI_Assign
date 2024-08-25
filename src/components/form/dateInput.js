const DateInput = ({ value, onChange }) => {

    const handleDateChange = (e) => {
        onChange(e);  // Calling the onChange prop passed from useForm to update the state.
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