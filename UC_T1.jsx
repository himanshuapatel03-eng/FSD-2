import {createContext} from 'react'
import UC_T2 from './UC_T2'

const num = createContext({n1:5,n2:4,n3:2})

export default function UC_T1() {
    return(
        <div>
            <UC_T2 />
        </div>
    )
}

export {num}