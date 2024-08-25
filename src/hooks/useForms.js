import { useState } from 'react';
import { validateEmail, validateName } from '../utils/formValidator';

const useForm = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [birthDate, setBirthDate] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleDateChange = (e) => setBirthDate(e.target.value);

    const handleNameValidation = () => {
        const { isValid, error } = validateName(name);
        setIsNameValid(isValid);
        setNameError(error);
    };

    const handleEmailValidation = () => {
        const { isValid, error } = validateEmail(email);
        setIsEmailValid(isValid);
        setEmailError(error);
    };

    const handleFormChange = () => {
        const isValid = isNameValid && isEmailValid && birthDate;
        setIsFormValid(isValid);
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setBirthDate('');
        setNameError('');
        setEmailError('');
        setIsNameValid(false);
        setIsEmailValid(false);
        setIsFormValid(false);
    };

    return {
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
        handleNameValidation,
        handleEmailValidation,
        handleFormChange,
        setShowPopup,
        setIsConfirmed,
        resetForm,
    };
};

export default useForm;