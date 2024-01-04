import axios from 'axios';


const getcurrencies = async () =>{
    try{
        const res = await axios.get(`https://api.frankfurter.app/currencies`);
       
        const data = (res.data) ;
        console.log(data)
        const entries = Object.entries(data)
       
        return entries;
    }
    catch(err){
        throw new Error()
        }
}

export default getcurrencies;
