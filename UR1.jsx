import {useReducer} from 'react'

function reducer(state,action) {
    return state+action
}

function UR1() {
    const[state,dispatch] = useReducer(reducer,20)

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch(5)}>Click</button>
        </div>
    )
}

export default UR1