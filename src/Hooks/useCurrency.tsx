import { useQuery } from "@tanstack/react-query"
import getcurrencies from "../Apis/getcurrencies.tsx"


const useCurrency = () => {
    const {data, error, status} = useQuery<string[], Error>({
        queryKey: ['currency'], // unique key to this particular request (used for cache)
        queryFn: getcurrencies  // function that returns a promise or data
    })

    return{data, error, status}

}

export default useCurrency;

//In TypeScript, Error is a built-in JavaScript object type used to represent an error 
//that occurred during the execution of code. 
//It's a standard object that holds information about the error, such as its name, message, 
//and stack trace.