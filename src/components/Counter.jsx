import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increase,decrement} from '../redux/slices/counter/index'

const Counter = () => {

    const count = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch(increase())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter