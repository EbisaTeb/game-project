import UseData from "./useData";

 export interface Genre {
    id:number;
    name:string;
    image_background:string;
 }
const UseGenres=()=>UseData<Genre>('/genres');
export default UseGenres;