import axios from 'axios';


const getcurrencies = async () =>{
    try{
        const res = await axios.get(`https://marketdata.tradermade.com/api/v1/live_currencies_list?api_key=Dc3e2Gl4saz-byDpYh9i`);
           
        const data = (res.data.available_currencies) ;
        console.log(data)
        const keys = Object.keys(data) 
        console.log(keys)
        return keys;
        }
    catch(err){
        throw new Error()
        }
}

