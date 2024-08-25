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

//This funtion checks conditions to ensure the correct format of email.
export const validateName = (name, handleNameError, handleNameValidation) => {

    //Removed leading and trailing spaces of name.
    const trimmedName = name.trim();

    // Reg-ex pattern to ensure the name starts with a letter.
    const nameRegex = /^[A-Za-z]/;

    if (trimmedName.length === 0) {
        handleNameError('Name cannot be empty or just spaces.');
        handleNameValidation(false);
        return false;
    }

    // Check if the first character is a letter (A-Z, a-z)
    if (!nameRegex.test(trimmedName)) {
        handleNameError('Name must start with a letter (A-Z or a-z).');
        handleNameValidation(false);
        return false;
    }
    const spacesRegex = /[\s-]{2,}/;
    // Check for consecutive spaces or hyphens
    if (spacesRegex.test(trimmedName)) {
        handleNameError('Name cannot have consecutive spaces or hyphens.');
        handleNameValidation(false);
        return false;
    }

    // Check if the name has valid length (at least 2 characters)
    if (trimmedName.length < 2) {
        handleNameError('Name must be at least 2 characters long.');
        handleNameValidation(false);
        return false;
    }
    handleNameError('');
    handleNameValidation(true);
    return true;
};

//Function to ensure that the output date format is as the format in which date is taken as input.
export const formatBirthDate = (date) => {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
};