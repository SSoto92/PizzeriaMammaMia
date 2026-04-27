const Navbar = ({ setView }) => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <button
          className="navbar-brand fw-bold btn btn-link text-white text-decoration-none p-0"
          onClick={() => setView('home')}
        >
          Pizzería Mamma Mía!
        </button>

        <div className="d-flex gap-2 flex-wrap">
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => setView('home')}
          >
            🍕 Home
          </button>

          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
              <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => setView('login')}
              >
                🔐 Login
              </button>

              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => setView('register')}
              >
                🔐 Register
              </button>
            </>
          )}

          <button className="btn btn-info btn-sm text-white fw-semibold">
            🛒 Total: ${total.toLocaleString('es-CL')}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar