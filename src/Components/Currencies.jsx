import React from 'react'
import useCurrency from '../Hooks/useCurrency'
const Currencies = () => {
  const {data, status, error} = useCurrency()

   
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
    {data.map((item)=>(<option>{item[0]}</option>))}
   </select>

    </>
  )
}

export default Currencies