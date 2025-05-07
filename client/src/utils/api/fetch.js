const BASE_URL = "http://localhost:3003/api";

async function fetchData(route,method="GET",data=null){
    const url = BASE_URL + route;
    //const token =  getToken();
    const options = {
        method : method,
        headers: {
            "Content-Type" : "application/json"
        },
        credentials: "include"
    };
    // if(token){
    //     options.headers["Authorization"] = `Bearer ${token}`;
    // }
    if(data){
        options.body = JSON.stringify(data)
    }
    const response  = await fetch(url,options);
    const responseData = await response.json();
    if(!response.ok){
        responseData.status = response.status;
    }
    return responseData;
}

export default fetchData;