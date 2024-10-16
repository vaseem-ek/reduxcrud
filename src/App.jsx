import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Dashbord from './assets/Dashbord'
import './bootstrap.min.css'
import Header from './Heade'
import Footer from './Footer'
import Landing from './assets/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/dash' element={<Dashbord/>}/>

    </Routes>
    <Footer />
      
    </>
  )
}

export default App
