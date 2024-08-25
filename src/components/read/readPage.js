import React, { useEffect, useState } from 'react';
import { workAPI } from '../../api/endPoints/workAPIEndPoint'; //It is Endpoint of the API to fetch data.
// import getWorkData from '../../api/fetchData/getWorkData';//It is a custom hook that fetches the required data from the given endPoint.
import useFetchWorks from '../../hooks/useFetchWorks';
import ReadCard from './cards/readCard'; //It is the card to display the Title and Authors of the work.
import ShimmerCard from './cards/shimmerCard';//It will be rendered till the required data loads.
import LoadMore from './buttons/loadMore';//Button to load 5 more cards.

const ReadPage = () => {

  const [cardCount, setCardCount] = useState(5);//It will keep count of cards displayed at the moment which is initially 5.
  const allWorks = useFetchWorks(workAPI);// It will store the entire work cards. It will render only once.
  // const [allWorks, setAllWorks] = useState([]);

  // async function fetchData() {
  //   const data = await getWorkData(workAPI);
  //   setAllWorks(data);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const loadMore = () => {
    setCardCount(cardCount + 5);
  };

  //Conditional Rendering
  return allWorks?.length === 0 ? (
    <div className="p-5">
      <ShimmerCard></ShimmerCard>
    </div>
  ) : (
    <div className="p-5">
      {allWorks?.map((work, index) => (
        index < cardCount && <ReadCard {...work} />
      ))}
      {allWorks && allWorks.length > cardCount && (
        <LoadMore loadMore={loadMore} />
      )}
    </div>
  );
};

export default ReadPage;