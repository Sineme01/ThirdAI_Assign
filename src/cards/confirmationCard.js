const ConfirmationCard = ({ name, email, birthDate, handleConfirm }) => {
    return (
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
    );
};

export default ConfirmationCard;