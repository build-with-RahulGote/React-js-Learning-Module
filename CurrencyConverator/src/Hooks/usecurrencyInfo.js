//let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/.min.json

import { useEffect,useState } from "react";

function usecurrencyInfo(currency){
    const [data,setdata]=useState({});
    useEffect(()=>{

        fetch(`/https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

        .then((res)=>res.json())
        .then((res)=>setdata(res))
        .catch((error) => console.error("Error fetching currency data:", error));

    },[currency])
    
    return data;
    
}
export default usecurrencyInfo;