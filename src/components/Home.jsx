import { useEffect, useState } from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = ({ onViewPizza }) => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas')

        if (!response.ok) {
          throw new Error('No se pudo obtener el listado de pizzas')
        }

        const data = await response.json()
        setPizzas(data)
      } catch (error) {
        console.error(error)
        setError('No se pudieron cargar las pizzas. Verifica que el backend esté levantado en el puerto 5000.')
      } finally {
        setLoading(false)
      }
    }

    getPizzas()
  }, [])

  return (
    <>
      <Header />

      <main className="container my-5">
        <h2 className="text-center fw-bold mb-4">Nuestras pizzas</h2>

        {loading && (
          <div className="alert alert-info text-center" role="alert">
            Cargando pizzas...
          </div>
        )}

        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="row g-4">
            {pizzas.map((pizza) => (
              <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
                <CardPizza
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                  desc={pizza.desc}
                  onViewMore={onViewPizza}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default Home