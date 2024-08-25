
const ShimmerCard = () => {
    return (
        <>
            {
                Array(5)
                    .fill("")
                    .map(() => (
                        <div className="bg-gray-100 p-4 mb-4 rounded-md shadow-md mx-52">
                            <div className="px-8">
                                <div className="bg-gray-100 w-96 h-16  mb-2"></div>
                            </div>
                        </div>
                    ))
            }
        </>
    );
};

export default ShimmerCard;