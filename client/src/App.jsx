import { useState } from 'react'
import ProductForm from './components/ProductForm'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'


function App() {

  return (
    <Routes>
      <Route path='/admin' element={
        <div className='mx-36 flex flex-col items-center content-center'>
          <ProductForm />
          <br />
          <ProductList />
        </div>}></Route>
      <Route path='/:id' element={<ProductDetail />}></Route>
    </Routes>
  )
}

export default App
