
import { Routes, Route } from 'react-router-dom';
import Home from '../Views/Home/index'
import MontarPedido from '../Views/Pizza';
export default function Rotas (){
  return(
      <>
          <Routes>
          <Route exact path="/" element={<Home />} />
    </Routes>
    <Routes>
          <Route exact path="/MontarPedido" element={<MontarPedido />} />
    </Routes>
      </>


  )




}