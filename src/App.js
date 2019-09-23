import React from 'react'
import Header from './Header'
import Main from './Main'
import { BrowserRouter } from "react-router-dom";
import "./App.css"


const App = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Main />
  </div>
  </BrowserRouter>
)


export default App