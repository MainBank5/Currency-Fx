import React from 'react'
import useCurrency from '../Hooks/useCurrency'
const Currencies = () => {
  const {data, status, error} = useCurrency()

    if(status === "loading") return <h1>Loading....</h1>
    if(error) {return <h1>Error Fetching Posts: {error.message}</h1>}
    if (!data || data.length === 0) return <span>No data</span>;

  return (
    <>
   <select className='mt-10 ml-8 border-none p-2 rounded-md'>
    {/* map through the array of currency codes and create an option for each one */}
    {data.map((item)=>(<option>{item[0]}</option>))}
   </select>

    </>
  )
}

export default Currencies