//On click the button will increment the variable cardCount in readPage by 5.

const LoadMore = ({ loadMore }) => {
    return (
        <div className='mx-[600px]'>
            <button
                onClick={loadMore}
                className="mt-4 py-4 px-10 bg-blue-500 text-white font-semibold font-mono text-2xl rounded-md shadow hover:bg-green-500"
            >
                Load more
            </button>
        </div>
    );
};

export default LoadMore;