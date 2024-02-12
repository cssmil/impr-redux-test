import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { PokeApp } from './PokeApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <PokeApp />
    {/* <App /> */}
  </Provider>

)
