import {useState, useEffect, useCallback} from "react";
import axios from 'axios';

export default function useFetch(url: string) {
    const [response, setResponse] = useState<any[]>([]);
    const [error, setError] = useState<any>("");
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    const localStorageResponse = window.localStorage.getItem(url);

    const fetchData = useCallback(async () => {
        if(localStorageResponse){
            setResponse(JSON.parse(localStorageResponse));
        } else {
            try {
                setIsLoading(true);
                setError(false);
                const response: any = await axios({
                    method: 'GET',
                    url: `https://jsonplaceholder.typicode.com/${url}`,
                })
                setIsLoading(false);
                setResponse(response.data);
                window.localStorage.setItem(url, JSON.stringify(response.data));

            } catch (err) {
                setError(err);
            }
        }

    }, [url, localStorageResponse]);

    useEffect(() => {
        fetchData();
    }, [url, fetchData]);

    return [ response, error, isLoading ];
}
