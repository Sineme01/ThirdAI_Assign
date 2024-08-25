//This is the button for Load more used in readPage.js.
//on Click of the button loadMore function will be executed.
//The function is passed as an argument in readPage.

const LoadMore = ({ loadMore }) => {
    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={loadMore}
                className="py-4 px-10 bg-blue-500 text-white font-semibold font-mono text-2xl rounded-md shadow hover:bg-green-500"
            >
                Load more
            </button>
        </div>
    );
};

export default LoadMore;