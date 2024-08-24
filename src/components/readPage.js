import React, { useState, useEffect } from 'react';

function ReadPage() {
  const [works, setWorks] = useState([]);
  const [offset, setOffset] = useState(5);
  const [allWorks, setAllWorks] = useState([]);
  const fetchWorks = async () => {
    try {
      const response = await fetch('https://api.openalex.org/works');
      const data = await response.json();

      if (data.results) {
        setAllWorks(data?.results);
        setWorks(data?.results.slice(0, offset));
        console.log("Initial data....", data?.results);
      }
    } catch (error) {
      console.error('Error fetching works:', error);
    }
  };

  useEffect(() => {
    //API Calling
    fetchWorks();
  }, []);

  const loadMore = () => {
    setOffset(offset + 5);
    setWorks(works.concat(allWorks.slice(0, offset)));
  };

  return (
    <div className="p-5">
      {works.map((work) => (
        <div key={work.id} className="bg-gray-100 p-4 mb-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
          {/* If authors exist, display them; if not, handle accordingly */}
          <p className="text-sm text-gray-700">
            {work.authorships && work.authorships.map((author) => author.author.display_name).join(', ')}
          </p>
        </div>
      ))}
      <button
        onClick={loadMore}
        className="mt-4 p-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
      >
        Load 5 more
      </button>
    </div>
  );
}

export default ReadPage;
