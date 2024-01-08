import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'38089a47577845fd883d6462f67abdcb'
    }
})