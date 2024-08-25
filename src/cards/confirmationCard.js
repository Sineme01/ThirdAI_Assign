//This card will display all the entered details by the user.
// const ConfirmationCard = ({ name, email, birthDate, handleConfirm }) => {
//     return (
//         <div className="transform transition-all duration-500 ease-in-out">
//             <h2 className="text-xl font-bold mb-4">Confirm your information</h2>
//             <div className="rounded-lg shadow-md p-2">
//                 <p>Name: {name}</p>
//                 <p>Email: {email}</p>
//                 <p>Birth Date: {birthDate}</p>
//             </div>
//             <button
//                 onClick={handleConfirm}
//                 className="mt-4 px-5 py-2 bg-blue-500 text-white rounded"
//             >
//                 Confirm
//             </button>
//         </div>
//     );
// };

// export default ConfirmationCard;


const ConfirmationCard = ({ name, email, birthDate, handleConfirm }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto transform transition-all duration-500 ease-in-out hover:shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Confirm Your Information</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-600">Name:</span>
            <span className="text-gray-800">{name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-600">Email:</span>
            <span className="text-gray-800">{email}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-600">Birth Date:</span>
            <span className="text-gray-800">{birthDate}</span>
          </div>
        </div>
        <button
          onClick={handleConfirm}
          className="w-full mt-8 px-6 py-3 bg-blue-600 text-white rounded-md font-semibold tracking-wide hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
        >
          Confirm
        </button>
      </div>
    );
  };
  
  export default ConfirmationCard;
