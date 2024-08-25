import React from 'react';
import FormInput from './formInput';
import DateInput from './dateInput';
import SubmitButton from './buttons/submitButton';
import PopupCard from '../../cards/popupCard';
import useForm from '../../hooks/useForms';
import { formatBirthDate } from '../../utils/formValidator';

const FormPage = () => {
    const {
        name,
        email,
        birthDate,
        nameError,
        emailError,
        isFormValid,
        showPopup,
        isConfirmed,
        handleNameChange,
        handleEmailChange,
        handleDateChange,
        validateNameField,
        validateEmailField,
        setShowPopup,
        setIsConfirmed,
        resetForm,
    } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const handleConfirm = () => {
        setIsConfirmed(true);
        setTimeout(() => {
            setShowPopup(false);
            setIsConfirmed(false);
            resetForm();
        }, 3000);
    };

    const handleOutsideClick = () => {
        setShowPopup(false);
    };

    return (
        <div className="p-5 max-w-sm mx-auto my-28 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={validateNameField}
                    error={nameError}
                />
                <FormInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={validateEmailField}
                    error={emailError}
                />
                <DateInput value={birthDate} onChange={handleDateChange} />
                <SubmitButton isFormValid={isFormValid} />
            </form>
            {showPopup && (
                <PopupCard
                    name={name}
                    email={email}
                    birthDate={formatBirthDate(birthDate)}
                    handleOutsideClick={handleOutsideClick}
                    handleConfirm={handleConfirm}
                    isConfirmed={isConfirmed}
                />
            )}
        </div>
    );
};

export default FormPage;