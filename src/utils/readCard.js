
const ReadCard = ({id, title, authorships}) => {
    return (
        <div key={id} className="bg-gray-100 p-4 mb-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            {/* If authors exist, display them; if not, handle accordingly */}
            <p className="text-sm text-gray-700">
                {authorships && authorships.map((author) => author.author.display_name).join(', ')}
            </p>
        </div>
    );
};

export default ReadCard;