import React from 'react'
import BooksComponent from './components/BooksComponent';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Books from './components/Books';

const App = () => {
  return (
  
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/books' element={<BooksComponent/>}/>
    </Routes>
  
  )
}

export default App