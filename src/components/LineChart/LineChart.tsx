import * as C from './styles'
import { cryptoHistory } from '../../types/cryptoHistory'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2'


interface Props {
    coinHistory: cryptoHistory | undefined,
    currentPrice: string | undefined,
    coinName: string | undefined
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const LineChart = ({coinHistory, currentPrice, coinName}: Props) => {
    const coinPrice = []
    const coinTimestamp = []

    if(coinHistory) {
        for(let i = 0; i < coinHistory?.data?.history.length; i+= 1) {
            coinPrice.push(coinHistory?.data.history[i].price)
        }

        for(let i = 0; i < coinHistory?.data?.history.length; i+= 1) {
            const toString = Number(String(coinHistory.data.history[i].timestamp).concat('000'))
            coinTimestamp.push(new Date(toString).toLocaleDateString())
        }

    }
    
    const data = {
        labels: coinTimestamp.reverse(),
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice.reverse(),
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          }
        },
      };

    return (
        <C.Chart>
            <div className='coin--data'>
                <h1>{coinName} Price Hart</h1>
                <div className='price--info'>
                    <p>{coinHistory?.data.change}%</p>
                    <p>Current {coinName} Price: $ {Number(currentPrice).toFixed(2)}</p>
                </div>
            </div>
            <Line 
                data={data}
                options={options}
            />
        </C.Chart>
    )
}