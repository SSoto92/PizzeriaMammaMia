const Navbar = ({ setView, view }) => {
  const token = false

  const getButtonClass = (buttonView) => {
    return view === buttonView
      ? 'btn btn-info btn-sm text-white fw-semibold'
      : 'btn btn-outline-light btn-sm'
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <button
          type="button"
          className="navbar-brand fw-bold mb-0 btn btn-link text-white text-decoration-none p-0"
          onClick={() => setView('home')}
        >
          Pizzería Mamma Mía!
        </button>

        <div className="d-flex gap-2 flex-wrap justify-content-end">
          <button
            type="button"
            className={getButtonClass('home')}
            onClick={() => setView('home')}
          >
            🍕 Home
          </button>

          {token ? (
            <>
              <button
                type="button"
                className="btn btn-outline-light btn-sm"
              >
                🔓 Profile
              </button>

              <button
                type="button"
                className="btn btn-outline-light btn-sm"
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className={getButtonClass('login')}
                onClick={() => setView('login')}
              >
                🔐 Login
              </button>

              <button
                type="button"
                className={getButtonClass('register')}
                onClick={() => setView('register')}
              >
                🔐 Register
              </button>
            </>
          )}

          <button
            type="button"
            className={getButtonClass('cart')}
            onClick={() => setView('cart')}
          >
            🛒 Carrito
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar