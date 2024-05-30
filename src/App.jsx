import { useState } from 'react'
import MainPage from './Components/MainPage/MainPage'
import IngredientsPage from './Components/IngridientsPage/IngredientsPage'
import { Route, Routes } from 'react-router-dom'
import CartPage from './Components/cartPage/CartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
      <Routes>
        <Route path='/' element={<MainPage/>}/>  
        <Route path='/ingredients-page' element={<IngredientsPage/>}/> 
        <Route path = '/cart-page' element={<CartPage/>}></Route> 
      </Routes>   

    </>
  )
}

export default App
