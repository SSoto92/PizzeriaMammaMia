const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm border-0 pizza-card">
      <img src={img} className="card-img-top pizza-img" alt={`Pizza ${name}`} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">Pizza {name}</h5>

        <hr />

        <p className="text-center text-muted mb-2">Ingredientes:</p>

        <ul className="list-unstyled text-center small mb-3">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <hr />

        <h4 className="text-center fw-bold mb-3">
          Precio: ${price.toLocaleString('es-CL')}
        </h4>

        <div className="d-flex justify-content-between mt-auto">
          <button className="btn btn-outline-dark btn-sm">Ver más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza