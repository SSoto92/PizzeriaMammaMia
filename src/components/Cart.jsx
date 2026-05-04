import { useState } from 'react'
import { pizzaCart } from '../pizzas'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const formatPrice = (value) => value.toLocaleString('es-CL')

  const increasePizza = (id) => {
    setCart((currentCart) =>
      currentCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza,
      ),
    )
  }

  const decreasePizza = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza,
        )
        .filter((pizza) => pizza.count > 0),
    )
  }

  const total = cart.reduce(
    (accumulator, pizza) => accumulator + pizza.price * pizza.count,
    0,
  )

  return (
    <main className="container my-5 cart-page">
      <section className="cart-container mx-auto bg-white rounded shadow-sm p-4">
        <h5 className="fw-bold mb-4">Detalles del pedido:</h5>

        {cart.length === 0 ? (
          <div className="alert alert-info mb-0" role="alert">
            Tu carrito está vacío.
          </div>
        ) : (
          <>
            <div className="d-flex flex-column gap-3">
              {cart.map((pizza) => (
                <div
                  className="cart-item d-flex align-items-center justify-content-between gap-3"
                  key={pizza.id}
                >
                  <div className="d-flex align-items-center gap-3 min-width-0">
                    <img
                      src={pizza.img}
                      className="cart-img rounded"
                      alt={`Pizza ${pizza.name}`}
                    />

                    <span className="fw-semibold text-capitalize cart-name">
                      {pizza.name}
                    </span>
                  </div>

                  <div className="d-flex align-items-center gap-3 ms-auto">
                    <span className="fw-bold cart-price">
                      ${formatPrice(pizza.price)}
                    </span>

                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm cart-btn"
                      onClick={() => decreasePizza(pizza.id)}
                    >
                      -
                    </button>

                    <span className="fw-semibold cart-count">{pizza.count}</span>

                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm cart-btn"
                      onClick={() => increasePizza(pizza.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            <h3 className="fw-bold mb-3">Total: ${formatPrice(total)}</h3>

            <button type="button" className="btn btn-dark">
              Pagar
            </button>
          </>
        )}
      </section>
    </main>
  )
}

export default Cart