import { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password || !confirmPassword) {
      setMessage('Todos los campos son obligatorios.')
      setMessageType('danger')
      return
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.')
      setMessageType('danger')
      return
    }

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.')
      setMessageType('danger')
      return
    }

    setMessage('Registro exitoso.')
    setMessageType('success')
  }

  return (
    <main className="container form-page">
      <div className="form-card">
        <h1 className="mb-4">Register</h1>

        {message && (
          <div className={`alert alert-${messageType}`} role="alert">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </main>
  )
}

export default Register