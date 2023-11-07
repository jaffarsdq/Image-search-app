import { useState, useEffect } from "react";
import axios from "axios";


const API_KEY = "3LTCo9b_qCHAD8mQydOa0KjGvc6w4aMZaDfKG0BTP_o";

function LoadImages(){
    const [state, setState] = useState([])
    useEffect(() => {
        axios
        .get("https://api.unsplash.com/photos/?client_id=" + API_KEY)
        .then((data) => {
            setState(data.data);
        });
    } , [])
    return state;
}

function SearchImages(params) {
    const [query, setQuery] = useState()
    useEffect(() => {
        axios
        .get("https://api.unsplash.com/search/photos?query="+params+"&client_id=" + API_KEY)
        .then((data) => {
            setQuery(data.data.results);
        });
    }, [params])
    return query;

}
export {LoadImages, SearchImages};