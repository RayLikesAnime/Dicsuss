import React from "react";
import { browserHistory  } from 'react-router'
import{BrowserRouter, HashRouter,Route} from 'react-router-dom'
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
    </BrowserRouter>
   
  );
}

export default App;
