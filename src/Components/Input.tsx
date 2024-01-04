import Card from '../Components/Card.tsx'
import InputBox from '../Components/InputBox.tsx'


const Input = () => {
  return (
    <Card >
       <InputBox/>
       <InputBox/>
       <button className="bg-blue-500 p-7 w-2/3 h-1 mb-5 rounded-md flex justify-center items-center text-white text-2xl hover:bg-blue-400">Convert</button>
    </Card>
  )
}

export default Input