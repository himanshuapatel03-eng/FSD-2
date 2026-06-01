import {createContext} from 'react'
import UC2 from './UC2.jsx'

var Fname = createContext()
var Lname = createContext()

export default function UC1(){
    return(
        <div>
            <Fname.Provider value = 'Himanshu'>
                <Lname.Provider value = 'Patel'>
                    <UC2 />
                </Lname.Provider>
            </Fname.Provider>
        </div>
    )
}

export {Fname,Lname}