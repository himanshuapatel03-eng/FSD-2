import {useReducer} from 'react'

function reducer(state,action) {
    if(action.type === 'inc') {
        return state+2
    }
    else if(action.type === 'dec') {
        return state-2
    }
    else{
        return state
    }
}

function UR2() {
    const[state,dispatch] = useReducer(reducer,50)

    return(
        <div>
            <h1>{state}</h1> <br />
            <button onClick={() => dispatch({type : 'inc'})}>INC</button>
            <button onClick={() => dispatch({type : 'dec'})}>DEC</button>
        </div>
    )
}

export default UR2