import {createContext} from 'react'
import UC_T3 from './UC_T3'

var color = createContext()

export default function UC_T2() {
    return(
        <color.Provider value='red'>
            <UC_T3 />
        </ color.Provider>
    )
}

export {color}