import {useState, useEffect, useCallback} from "react";
import axios from 'axios';

export default function useFetch(url: string) {
    const [response, setResponse] = useState<any[]>([]);
    const [error, setError] = useState<any>("");
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(false);
            const response: any = await axios({
                method: 'GET',
                url: `https://jsonplaceholder.typicode.com/${url}`,
            })
            setIsLoading(false);
            setResponse(response.data);

        } catch (err) {
            setError(err);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [url]);

    return [ response, error, isLoading ];
}
