import {useContext} from 'react'
import {num} from './UC_T1'
import {color} from './UC_T2'

export default function UC_T3() {
    const n = useContext(num)
    const c = useContext(color)

    const ans = n.n1*n.n2/n.n3

    return(
        <div>
            <h1 style={{color:c}}>{ans}</h1>
        </div>
    )
}