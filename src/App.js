import "./App.css";
import React from "react";
import { AppUI } from "./App/AppUI";
import { Provider } from './TodoContext/index'

function App() {
  
  return (
    <Provider>
      <AppUI/>
    </Provider>
  )
}

export default App;
