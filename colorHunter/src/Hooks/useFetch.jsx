import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(v => setData(v.color));
    }, [url]);
    
    return data;
};

export {useFetch};