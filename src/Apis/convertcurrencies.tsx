import axios from 'axios'

type Results = {conversion_result:number}
type Conversionprops = {base:string, qoute:string, amount:number}

const convertcurrencies = async ({base, qoute, amount}: Conversionprops) :Promise<number> => {
    try{
        const res = await axios.get <Results>(`https://v6.exchangerate-api.com/v6/61131a75c46473c09943de81/pair/${base}/${qoute}/${amount}`)
        const data = res.data.conversion_result
        console.log(data)
        
        return data
    }
    catch(error) {
        throw new Error('Error fetching conversion rates')
    }
}

export default convertcurrencies;