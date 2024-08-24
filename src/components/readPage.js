import React, { useState } from 'react';
import { workAPI } from '../api/workAPIEndPoint'; //It is Endpoint of the API to fetch data.
import useFetchWorks from '../hooks/useFetchWorks';//It is a custom hook that fetches the required data from the given endPoint.
import ReadCard from "../utils/readCard"; //It is the card to display the Title and Authors of the work.


const ReadPage = () => {

  const [cardCount, setCardCount] = useState(5);//It will keep count of cards displayed at the moment which is initially 5.
  const allWorks = useFetchWorks(workAPI);// It will store the entire work cards.
  const works = allWorks.slice(0, cardCount);

  //Function to update cardCount on the click of Load More button.
  const loadMore = () => {
    setCardCount(cardCount + 5);
  };

  return (
    <div className="p-5">
      {works.map((work) => (
        <ReadCard {...work} />
      ))}
      <div className=''>
        <button
          onClick={loadMore}
          className="mt-4 p-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          Load 5 more
        </button>
      </div>
    </div>
  );
};

export default ReadPage;