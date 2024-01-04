import Currencies from './Currencies.jsx'
import { useState, createContext } from 'react';

export const AppContext = createContext();

const InputBox = () => {
  const [base, setBase] = useState('')
  return (
    <>
    <div>
      <label className="text-black text-2xl mt-20">
        Base:
      </label>
      <AppContext.Provider value={{base, setBase}}>
      <Currencies/>
      </AppContext.Provider>
     <input type="number" className="w-full h-10  py-1.5 mt-10 mb-9 outline-none rounded-md" />
    </div>
    
    
    <div>
      <label className="text-black text-2xl mt-2 ">
        Qoute:
      </label>
      <AppContext.Provider value={{base, setBase}}>
      <Currencies/>
      </AppContext.Provider>
      <input type="number" className="w-full h-10  py-1.5 mt-10 mb-9 outline-none rounded-md" />
      
    </div>
    <div className='bg-white w-1/2 rounded-md h-8 mb-10 text-center flex justify-center items-center'>
      <h1>hello</h1>
    </div>
     
    </>
  )
}

export default InputBox;