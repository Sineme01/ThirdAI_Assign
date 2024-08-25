import React from 'react';

const SubmitButton = ({ isFormValid }) => (
    <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full p-2 mt-2 text-white rounded ${isFormValid ? 'bg-green-500' : 'bg-gray-300 cursor-not-allowed'
            }`}
    >
        Submit
    </button>
);

export default SubmitButton;