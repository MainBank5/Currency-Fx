import Card from '../Components/Card.tsx'
import InputBox from '../Components/InputBox.tsx'
import { useState, createContext, useDebugValue } from 'react';
import Results from '../Components/Results.tsx'
export const AppContext = createContext();

const Input = () => {
  const [base, setBase] = useState('USD');
  const [amount, setAmount] = useState(100);
  const [qoute, setQoute] = useState('CAD');
  return (
    <AppContext.Provider value={{base, setBase, amount, setAmount, qoute, setQoute}}>
    <Card >
       <InputBox/>

       <Results/>
      <button className="bg-blue-500 p-7 w-2/3 h-1 mb-5 rounded-md flex justify-center items-center text-white text-2xl hover:bg-blue-400">Convert</button>
    </Card>
    </AppContext.Provider>
  )
}

export default Input