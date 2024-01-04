import Card from '../Components/Card.tsx'
import InputBox from '../Components/InputBox.jsx'
import { useState, createContext } from 'react';
import Results from '../Components/Results.tsx'
export const AppContext = createContext();

const Input = () => {
  const [base, setBase] = useState('');
  const [amount, setAmount] = useState(0);
  const [qoute, setQoute] = useState('');
  return (
    <AppContext.Provider value={{base, setBase, amount, setAmount, qoute, setQoute}}>
    <Card >
       <InputBox/>

       <Results base={base} qoute={qoute} amount={amount}/>
      <button className="bg-blue-500 p-7 w-2/3 h-1 mb-5 rounded-md flex justify-center items-center text-white text-2xl hover:bg-blue-400">Convert</button>
    </Card>
    </AppContext.Provider>
  )
}

export default Input