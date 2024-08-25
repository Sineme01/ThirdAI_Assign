//It is a custom hook to call API with the given end point.

import { useEffect, useState } from "react";

const useFetchWorks = (endPoint) => {

    const [allWorks, setAllWorks] = useState([]);

    const getWorkData = async () => {
        try {
            const response = await fetch(endPoint);
            const data = await response.json();

            if (data?.results) {
                setAllWorks(data?.results);
            }
        } catch (error) {
            console.error('Error fetching works:', error);
        }
    }

    useEffect(() => {
        //API Call
        getWorkData(endPoint);
    }, [])

    return allWorks;
};

export default useFetchWorks;