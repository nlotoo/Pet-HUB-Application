import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => {
                return response.json()
            })
          
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
};