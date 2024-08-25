import React from 'react';

const PopupCard = ({ name, email, birthDate, handleOutsideClick, handleConfirm, isConfirmed }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={handleOutsideClick}
        >
            <div
                className="bg-white p-5 text-center rounded shadow-lg w-64 h-64 flex flex-col justify-center items-center overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {!isConfirmed ? (
                    <div className="transform transition-all duration-500 ease-in-out">
                        <h2 className="text-xl font-bold mb-4">Confirm your information</h2>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Birth Date: {birthDate}</p>
                        <button
                            onClick={handleConfirm}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Confirm
                        </button>
                    </div>
                ) : (
                    <div className="transform transition-all duration-500 ease-in-out flex flex-col items-center">
                        <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-xl font-bold">Thank you!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PopupCard;