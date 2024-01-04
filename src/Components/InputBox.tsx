import Currencies from '../Components/Currencies.jsx'


const InputBox = () => {

  return (
    <>
    <div>
      <label className="text-black text-2xl mt-20">
        Base:
      </label>
      <Currencies/>
     <input type="number" className="w-full h-10  py-1.5 mt-10 mb-9 outline-none rounded-md" />
    </div>
    
    
    <div>
      <label className="text-black text-2xl mt-2 ">
        Qoute:
      </label>
      <Currencies/>
      <input type="number" className="w-full h-10  py-1.5 mt-10 mb-9 outline-none rounded-md" />
    </div>
     
    </>
  )
}

export default InputBox;