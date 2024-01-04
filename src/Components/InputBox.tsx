import Currencies from '../Components/Currencies.jsx'
type Inputprops = {
    currency: string;
    defaultValue:string;
    value:string;
}


const InputBox = () => {

  return (
    <>
    <label className="text-black text-2xl mt-2 inline">
        Currency type:
    </label>
   <Currencies/>
     <input type="number" className="w-4/5 h-20  py-1.5 mt-10 mb-9 outline-none rounded-md" />
    </>
  )
}

export default InputBox;