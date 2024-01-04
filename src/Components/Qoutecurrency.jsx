import {useContext} from 'react'
import useCurrency from '../Hooks/useCurrency.tsx'
import {AppContext} from './Input.tsx'

const QouteCurrency = () => {
 
 const {setQoute} = useContext(AppContext);

  const handleSelection = (e) => {setQoute(e.target.value)}
  const {data, status, error} = useCurrency()

    if(status === "loading") return <h1>Loading....</h1>
    if(error) {return <h1>Error Fetching Posts: {error.message}</h1>}
    if (!data || data.length === 0) return <span>No data</span>;

   

  return (
    <>
   <select className='mt-10 ml-8 border-none p-2 rounded-md' onChange={handleSelection}>
    {/* map through the array of currency codes and create an option for each one */}
    {data.map((item, index)=>(<option key={index}>{item[0]}</option>))}
   </select>

    </>
  )
}

export default QouteCurrency;