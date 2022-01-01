import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Hero/Header/Header'
import Index from './Components/Pages/Download/Index'
import Dremium from './Components/Pages/Premium/Dremium'
import Support from './Components/Pages/Support/Support'
import './App.css'
import HeroDisplayText from './Components/Hero/HeroText/HeroDisplayText'
import SignUp from './Components/Form/SignUp'
import LogIn from './Components/Form/LogIn'



export const App = () => {
  
  return (
    <>
    

    <Router>
    <Header />
      <Routes>
        <Route path="/" exact element={<HeroDisplayText /> } />        
         <Route path="/premium"  element={<Dremium />} />
         <Route path="/support" element={<Support />} />
         <Route path="/download" element={<Index /> } />
         <Route path="/signup" element={<SignUp />}  />
         <Route path="/login" element={<LogIn /> }/>
      </Routes>
    </Router>
    </>
  )
}
