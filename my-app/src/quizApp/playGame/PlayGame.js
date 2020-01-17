import React, {useState} from 'react'
import { Data } from '../playGame/Data'
import EacthQA from './EacthQA'


function PlayGame() {
    const [data,setData] = useState(Data)
    return (
        <div>
           <EacthQA  data={data} />
        </div>
    )
}

export default PlayGame
