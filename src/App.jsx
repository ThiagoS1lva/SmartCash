import Calculadora from './components/pages/Calculadora'
import Cliente from './components/pages/Cliente'
import Contas from './components/pages/Contas'
import Home_page from './components/pages/Home_page'
import Menu from './components/layouts/Menu'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home_page />} />
        <Route path='/finanças' element={<Calculadora />} />
        <Route path='/contas' element={<Contas />} />
        <Route path='/cliente' element={<Cliente />} />
      </Routes>
    </>
  )
}

export default App
