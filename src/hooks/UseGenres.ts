import UseData from "./useData";

 export interface Genre {
    id:number;
    name:string;
 }
const UseGenres=()=>UseData<Genre>('/genres');
export default UseGenres;