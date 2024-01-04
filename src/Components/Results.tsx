import { useQuery } from "@tanstack/react-query";
import React, { ReactElement } from "react";
import convertcurrencies from "../Apis/convertcurrencies";
type Resultprops ={base:string, qoute:string, amount:number}

const Results = ({base, qoute, amount}: Resultprops) :ReactElement => {
    const {data, error, status} = useQuery({
        queryKey: ["convert"],
        queryFn: async ()=> convertcurrencies({base,qoute, amount}),
    })

    if (error) return <h1>Error fetching data {error?.message}</h1>
    if (status === "pending") return <h1>Loading...</h1>;
    
  return (
    <>
    <h1>{data}</h1>
    </>
  )
}

export default Results