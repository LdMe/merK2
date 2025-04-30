const BASE_URL = "http://localhost:3004/api";

async function fetchData(route){
    const url = BASE_URL + route;
    const response  = await fetch(url);
    const data = await response.json();
    console.log("data",data);
    return data;
}

export default fetchData;