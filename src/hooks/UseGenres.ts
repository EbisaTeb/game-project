import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Genre {
    id:number;
    name:string;

}
interface FetchGenresResponse{
    count:number;
    results:Genre[];
}
const UseGenres=()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoadinng ,setIsLoading]=useState(false)
    useEffect(() => {
        const controller=new AbortController()
        setIsLoading(true)
      apiClient
        .get<FetchGenresResponse>("/genres",{signal:controller.signal})
        .then((res) => {
          setGenres(res.data.results)
          setIsLoading(false)
        })
        .catch((error) => {
            if(error instanceof CanceledError) return;
            setError(error.message)
            setIsLoading(false)
          });
        return()=>controller.abort();
    },[] );
    return {genres,error,isLoadinng}
}
export default UseGenres;