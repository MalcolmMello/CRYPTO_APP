import axios from 'axios'

interface Props {
    uuidToString: string,
    period: string
}

const http = axios.create({
    baseURL: process.env.REACT_APP_CRYPTO_URL
})

export const CryptoApi = {
    getCoins: async (limit?: number) => {
        try {
            let coins = await http.get(`/coins?limit=${limit}`, {
                headers: {
                    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_HOST as string,
                    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_KEY as string
                }
            })
            return coins.data
        } catch (error) {
            console.log(error)
        }
    },
    getCoin: async (uuid: string) => {
        try {
            let coin = await http.get(`/coin/${uuid}`, {
                headers: {
                    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                    'x-rapidapi-key': 'b62db25697msh5694fe061c62ef1p1ac465jsn112aa8012fd7'
                }
            })
            return coin.data
        } catch (error) {
            console.log(error)
        }
    },
    //1648378800
    //1407783800000 
    getCoinHistory: async ({ uuidToString, period }: Props) => {
        try {
            let coin = await http.get(`/coin/${uuidToString}/history`, {
                params: {
                    referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: period
                },
                headers: {
                    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                    'x-rapidapi-key': 'b62db25697msh5694fe061c62ef1p1ac465jsn112aa8012fd7'
                }
            })
            return coin.data
        } catch (error) {
            console.log(error)
        }
    }
}