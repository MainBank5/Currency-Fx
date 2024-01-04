import { useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";
import convertcurrencies from "../Apis/convertcurrencies";
type Resultprops ={base:string, qoute:string, amount:number}

const Results = ({base, qoute, amount}: Resultprops) :ReactElement => {
    const {data, error, status} = useQuery({
        queryKey: ["convert"],
        queryFn: ()=> convertcurrencies({base,qoute, amount}),
    })

    

    if (error) return <h1 className="text-white">Error fetching data: - {error?.message}</h1>
    if (status === "pending") return <h1 className="text-white">Loading...</h1>;
    
  return (
    <>
    <div className='bg-white w-1/2 rounded-md h-8 mb-10 text-center flex justify-center items-center'>
      <h1 className="text-2xl">{data}</h1>
    </div>
    
    </>
    
    
    
  )
}

export default Results