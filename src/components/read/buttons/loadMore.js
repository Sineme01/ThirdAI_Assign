//On click the button will increment the variable cardCount in readPage by 5.

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