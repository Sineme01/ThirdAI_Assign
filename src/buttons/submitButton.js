// This button is used on FormPage to submit the form.
// The button will be enabled only when the isFormValid is true, i.e., all the fields are correctly entered.

const SubmitButton = ({ isFormValid }) => {
    // Set the base className
    let buttonClassName = "w-full p-2 mt-2 text-white rounded";

    // Add conditional classes based on the isFormValid prop
    if (isFormValid) {
        buttonClassName += " bg-green-500";
    } else {
        buttonClassName += " bg-gray-300 cursor-not-allowed";
    }

    return (
        <button
            type="submit"
            disabled={!isFormValid}
            className={buttonClassName}
        >
            Submit
        </button>
    );
};

export default SubmitButton;
