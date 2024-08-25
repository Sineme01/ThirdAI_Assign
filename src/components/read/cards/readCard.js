
const ReadCard = ({ id, title, authorships }) => {
    return (
        <div key={id} className="bg-gray-100 p-4 mb-4 rounded-md shadow-md mx-52">
            <div className="px-8">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-700">
                    {authorships && authorships.map((author) => author.author.display_name).join(', ')}
                </p>
            </div>
        </div>
    );
};

export default ReadCard;