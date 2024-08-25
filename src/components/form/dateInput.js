import React from 'react';

const DateInput = ({ value, onChange }) => (
    <label className="block mb-2">
        Birth Date:
        <input
            type="date"
            value={value}
            onChange={onChange}
            required
            className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"
        />
    </label>
);

export default DateInput;