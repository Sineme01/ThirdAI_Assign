import React from 'react';
import ThanksCard from './thanksCard';
import ConfirmationCard from './confirmationCard';

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
                    <ConfirmationCard
                        name={name}
                        email={email}
                        birthDate={birthDate}
                        handleConfirm={handleConfirm}
                    />
                ) : (
                    <ThanksCard />
                )}
            </div>
        </div>
    );
};

export default PopupCard;