import React from 'react'
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
const Currencies = () => {
    const getcurrencies = async () =>{
        try{
            const res = await axios.get(`https://marketdata.tradermade.com/api/v1/live_currencies_list?api_key=Dc3e2Gl4saz-byDpYh9i`);
           
            const data = (res.data.available_currencies) ;
            console.log(data)
            const keys = Object.keys(data) 
            console.log(keys)
            return keys;
        }
        catch(err){
            throw new Error()
            }
    }

    const {data, status, error} = useQuery({
      key: "currency", // unique cache key
      queryFn: getcurrencies   // function that returns a promise or any value
    })
    console.log('status:' , status)
    console.log('error:' , error)
    console.log('data:' , data)
    if(status === "loading") return <h1>Loading....</h1>
    if(error) {return <h1>Error Fetching Posts: {error.message}</h1>}
    if (!data || data.length === 0) return <span>No data</span>;

  return (
    <>
   <select>
    {/* map through the array of currency codes and create an option for each one */}
    {data.map((item)=>(<option>{item}</option>))}
   </select>

    </>
  )
}

export default Currencies