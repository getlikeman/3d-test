import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../app/globals.css'
import { IconContext } from "react-icons";
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <IconContext.Provider value={{ size:'3em'}}>
        <App />
    </IconContext.Provider>
  </React.StrictMode>,
)
