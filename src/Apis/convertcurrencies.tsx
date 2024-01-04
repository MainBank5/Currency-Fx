import axios from 'axios'

type Results = {conversion_result:number}


const convertcurrencies = async () :Promise<number> => {
    try{
        const res = await axios.get <Results>(`https://v6.exchangerate-api.com/v6/61131a75c46473c09943de81/pair/USD/KES/200`)
        const data = res.data.conversion_result
        console.log(data)
        
        return data
    }
    catch(error) {
        throw new Error('Error fetching conversion rates')
    }
}

export default convertcurrencies;