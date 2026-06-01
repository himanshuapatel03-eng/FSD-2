import {useReducer} from 'react'
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'

function reducer(state,action) {
    if(state === img1) {
        return img2
    }
    else {
        return img1
    }
}

function UR3() {
    const[state,dispatch] = useReducer(reducer,img1)

    return(
        <div>
            <img src={state} alt="image" width='400' height='400' /> <br />
            <button onClick={() => dispatch()}>Click</button>
        </div>
    )
}

export default UR3