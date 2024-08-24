import React, { useState } from 'react';

const FormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email format');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const handleConfirm = () => {
        setShowPopup(false);
        alert('Thank you!'); // Replace this with your animation and message logic
    };

    const handleOutsideClick = () => {
        setShowPopup(false);
    };

    const handleFormChange = () => {
        const isValid = name && email && birthDate && validateEmail(email);
        setIsFormValid(isValid);
    };

    return (
        <div className="p-5 max-w-sm mx-auto">
            <form onSubmit={handleSubmit} onChange={handleFormChange}>
                <label className="block mb-2">
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"
                    />
                </label>
                <label className="block mb-2">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => validateEmail(email)}
                        required
                        className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"
                    />
                    {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
                </label>
                <label className="block mb-2">
                    Birth Date:
                    <input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                        className="w-full p-2 mt-1 mb-4 border border-gray-300 rounded"
                    />
                </label>
                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full p-2 mt-2 text-white rounded ${isFormValid ? 'bg-green-500' : 'bg-gray-300 cursor-not-allowed'
                        }`}
                >
                    Submit
                </button>
            </form>

            {showPopup && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={handleOutsideClick}
                >
                    <div
                        className="bg-white p-5 text-center rounded shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
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
                </div>
            )}
        </div>
    );
}

export default FormPage;
