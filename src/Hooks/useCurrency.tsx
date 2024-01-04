import { useQuery } from "@tanstack/react-query"
import getcurrencies from "../Apis/getcurrencies"

const useCurrency = () => {
    const {data, error, status} = useQuery({
        queryKey: 'currency', // unique key to this particular request (used for cache)
        queryFn: getcurrencies  // function that returns a promise or data
    })

    return{data, error, status}

}

export default useCurrency;