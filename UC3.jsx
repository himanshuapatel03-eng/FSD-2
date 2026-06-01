import {useContext} from 'react'
import {Fname,Lname} from './UC1.jsx'

export default function UC3() {
    var fn = useContext(Fname)
    var ln = useContext(Lname)

    return(
        <div>
            <h1 style={{color:'purple',fontSize:'55px',textDecoration:'underline'}}>Welcome {fn} {ln}</h1>
        </div>
    )
}