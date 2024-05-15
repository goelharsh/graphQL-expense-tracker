import { useState } from 'react'

import HomePage from './pages/HomePage'
import TransactionPage from './pages/TransactionPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/ui/Header'
import { Route, Routes } from 'react-router-dom'


function App() {
  const authUser = true;


  return (
    <>
    { authUser && <Header/> }
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/transaction/:id" element={<TransactionPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      {/* footer  */}
    </>
  )
}

export default App
