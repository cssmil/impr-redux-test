import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './slices/counterSlice'


function App() {

  const { counter } = useSelector((state=>state.counter))
  console.log( counter )
  const dispatch = useDispatch()

  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <br />
      <h1>Contador</h1>
      <hr />
      <h3>Numero total: { counter }</h3>
      <h3>Cambios: 1</h3>
      <button onClick={ () => dispatch(increment()) }> Sumar +1 </button>
      <button onClick={() => dispatch(decrement()) }> Restar -1 </button>
      <button onClick={ () =>dispatch( incrementByAmount(10) ) }> Sumar +10 </button>
    </>
  )
}

export default App
