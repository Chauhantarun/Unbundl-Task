import { Route, Routes } from 'react-router-dom'
import './App.css'
import WhistleLanding from './MainComp/Landingpage'
import Header from './Comp/Header'
import Products from './Product/Products'


function App() {

  return (
    <>
    <Routes>
      <Route path='/products' element={<Products/>}/>
      <Route path='/' element={<WhistleLanding/>}/>
    </Routes>
    
    </>
  )
}

export default App
