import Currencies from './Currencies.jsx'
import Qoutecurrency from "./Qoutecurrency.jsx"
import { useContext } from 'react'
import { AppContext } from './Input.tsx'

const InputBox = () => {
  const {setAmount} = useContext(AppContext);

  const handleAmount = (e) => {setAmount(e.target.value)}
  return (
    <>
    <div>
      <label className="text-black text-2xl mt-20">
        Base:
      </label>
      
      <Currencies/>
     
     <input type="number" className="w-full h-10  py-1.5 mt-10 mb-9 outline-none rounded-md" onChange={handleAmount} />
    </div>
    
    
    <div>
      <label className="text-black text-2xl mt-2 ">
        Qoute:
      </label>
      
      <Qoutecurrency/>
      
      <input disabled type="number" className="w-full h-10  py-1.5 mt-10 mb-9 outline-none rounded-md" />
      
    </div>
    
     
    </>
  )
}

export default InputBox;