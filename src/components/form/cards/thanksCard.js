const ThanksCard = () => {
    return (
        <div className="transform transition-all duration-500 ease-in-out flex flex-col items-center">
            <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-xl font-bold">Thank you!</p>
        </div>
    );
}

export default ThanksCard;