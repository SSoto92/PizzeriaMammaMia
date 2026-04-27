import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer'

function App() {
  const [view, setView] = useState('home')

  return (
    <>
      <Navbar setView={setView} />

      {view === 'home' && <Home />}
      {view === 'login' && <Login />}
      {view === 'register' && <Register />}

      <Footer />
    </>
  )
}

export default App