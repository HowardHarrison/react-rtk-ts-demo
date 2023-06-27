import React from 'react'
//import { useSelector,useDispatch } from 'react-redux'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { ordered,restocked } from './icecreamSlice'

export const IcecreamView = () => {
    const [value,setValue] = React.useState(1)
    const numOfCakes = useAppSelector(state => state.icecream.numOfIcecreams)  
    const dispatch = useAppDispatch()
    return (
    <div>
      <h2>Number of ice creams - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>  
      <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))}/>
      <button onClick={() => dispatch(restocked(value))}>Restock ice creams</button>
    </div>
  )
}
