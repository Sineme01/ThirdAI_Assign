//It is function to fetch data from the given endpoint.

const getWorkData = async (endPoint) => {

    const response = await fetch(endPoint);
    const data = await response.json();
    console.log(data?.results);
    return data?.results;
};

export default getWorkData;