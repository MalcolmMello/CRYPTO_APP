import * as C from './styles'
import { Context } from '../../contexts/contexts'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { Cryptos } from '../../types/crypto'
import { CryptoApi } from '../../api/CryptoApi'
import { Topten } from '../../components/Topten/Topten'

export const Cryptocurrencies = () => {
    const { state } = useContext(Context)
    const [cryptos, setCryptos] = useState<Cryptos>()
    const [input, setInputValue] = useState('')

    useEffect(() => {
        getCoins()
    }, [])

    const getCoins = async () => {
        let coins = await CryptoApi.getCoins(100)
        setCryptos(coins)
    }
    const lowerSearch = input.toLowerCase()

    const filteredCoins = cryptos?.data.coins.filter(coin => coin.name.toLowerCase().includes(lowerSearch))

    return (
        <C.Cryptocurrencies theme={state.theme.theme}>
            <section className='container'>
                <div className='input--area'>
                    <input type="text"
                        value={input}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder='Search a crypto...'
                    />
                </div>
                <div className='coins--area'>
                    {filteredCoins?.map((coin) => (
                        <Topten
                            key={coin.uuid}
                            uuid={coin.uuid}
                            rank={coin.rank}
                            name={coin.name}
                            iconUrl={coin.iconUrl}
                            price={coin.price}
                            marketCap={coin.marketCap}
                            change={coin.change}
                        />
                    ))}
                </div>
            </section>
        </C.Cryptocurrencies>
    )
}