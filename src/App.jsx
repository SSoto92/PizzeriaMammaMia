import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Footer from './components/Footer'

function App() {
  const [view, setView] = useState('home')

  return (
    <>
      <Navbar setView={setView} view={view} />

      {view === 'home' && <Home />}
      {view === 'login' && <Login />}
      {view === 'register' && <Register />}
      {view === 'cart' && <Cart />}
      {view === 'pizza' && <Pizza onBack={() => setView('home')} />}

      <Footer />
    </>
  )
}

export default App