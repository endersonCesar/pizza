import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import Home from '../src/Views/Home'
 import Rota from "../src/Routes/routes";

function App() {
  return (
    <Router>
      <Rota></Rota>
    </Router>
  );
}

export default App;
