import { useEffect, useState } from 'react'

const Pizza = ({ onBack }) => {
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001')

        if (!response.ok) {
          throw new Error('No se pudo obtener la pizza solicitada')
        }

        const data = await response.json()
        setPizza(data)
      } catch (error) {
        console.error(error)
        setError('No se pudo cargar la información de la pizza. Verifica que el backend esté levantado en el puerto 5000.')
      } finally {
        setLoading(false)
      }
    }

    getPizza()
  }, [])

  if (loading) {
    return (
      <main className="container my-5 pizza-detail-page">
        <div className="alert alert-info text-center" role="alert">
          Cargando pizza...
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="container my-5 pizza-detail-page">
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      </main>
    )
  }

  if (!pizza) {
    return null
  }

  const formattedPrice = Number(pizza.price).toLocaleString('es-CL')

  return (
    <main className="container my-5 pizza-detail-page">
      <section className="card border-0 shadow pizza-detail-card overflow-hidden">
        <div className="row g-0">
          <div className="col-12 col-lg-6">
            <img
              src={pizza.img}
              className="img-fluid w-100 h-100 pizza-detail-img"
              alt={`Pizza ${pizza.name}`}
            />
          </div>

          <div className="col-12 col-lg-6">
            <div className="card-body p-4 p-lg-5 h-100 d-flex flex-column">
              <h1 className="fw-bold text-capitalize mb-3">Pizza {pizza.name}</h1>

              <p className="text-muted mb-4">{pizza.desc}</p>

              <h5 className="fw-bold mb-3">Ingredientes:</h5>

              <ul className="list-unstyled mb-4">
                {pizza.ingredients.map((ingredient) => (
                  <li className="mb-2" key={`${pizza.id}-${ingredient}`}>
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>

              <div className="mt-auto d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
                <h2 className="fw-bold mb-0">Precio: ${formattedPrice}</h2>

                <div className="d-flex gap-2">
                  {onBack && (
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={onBack}
                    >
                      Volver
                    </button>
                  )}

                  <button type="button" className="btn btn-dark">
                    Añadir 🛒
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Pizza