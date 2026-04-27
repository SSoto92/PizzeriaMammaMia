import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <>
      <Header />

      <main className="container my-5">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={['mozzarella', 'tomates', 'jamón', 'orégano']}
             img="/img/pizza-napolitana.jpg"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={['mozzarella', 'gorgonzola', 'parmesano', 'provolone']}
              img="/img/pizza-Esp.jpg"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={['mozzarella', 'pepperoni', 'orégano']}
             img="/img/pizza-pepperoni.jpg"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home