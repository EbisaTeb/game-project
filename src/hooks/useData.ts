
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface FetchResponse<T>{ 
    count:number;
    results:T[];
}
const UseData=<T>(endpoint:string)=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoadinng ,setIsLoading]=useState(false)
    useEffect(() => {
        const controller=new AbortController()
        setIsLoading(true)
      apiClient
        .get<FetchResponse<T>>(endpoint,{signal:controller.signal})
        .then((res) => {
          setData(res.data.results)
          setIsLoading(false)
        })
        .catch((error) => {
            if(error instanceof CanceledError) return;
            setError(error.message)
            setIsLoading(false)
          });
        return()=>controller.abort();
    },[] );
    return {data ,error,isLoadinng}
}
export default UseData;