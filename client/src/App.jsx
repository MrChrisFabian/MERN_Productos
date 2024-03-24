import { useState } from 'react'
import ProductForm from './components/ProductForm'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <Routes>
      <Route path='/admin' element={<ProductForm />}></Route>
    </Routes>
  )
}

export default App
