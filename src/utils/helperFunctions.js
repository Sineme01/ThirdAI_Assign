//This function do the Regular expression matching to ensure the correct format of email.
export const validateEmail = (email, handleEmailError, handleEmailValidation) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        handleEmailError('Invalid email format');
        handleEmailValidation(false);
        return false;
    } else {
        handleEmailError('');
        handleEmailValidation(true);
        return true;
    }
};