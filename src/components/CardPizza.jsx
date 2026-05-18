const CardPizza = ({ name, price, ingredients = [], img, desc, onViewMore }) => {
  const formattedPrice = Number(price).toLocaleString('es-CL')

  return (
    <div className="card h-100 shadow-sm border-0 pizza-card">
      <img src={img} className="card-img-top pizza-img" alt={`Pizza ${name}`} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-capitalize">Pizza {name}</h5>

        {desc && <p className="card-text text-muted small pizza-desc">{desc}</p>}

        <hr />

        <p className="text-center text-muted mb-2">Ingredientes:</p>

        <ul className="list-unstyled text-center small mb-3">
          {ingredients.map((ingredient) => (
            <li key={`${name}-${ingredient}`}>🍕 {ingredient}</li>
          ))}
        </ul>

        <hr />

        <h4 className="text-center fw-bold mb-3">Precio: ${formattedPrice}</h4>

        <div className="d-flex justify-content-between gap-2 mt-auto">
          <button
            type="button"
            className="btn btn-outline-dark btn-sm w-50"
            onClick={onViewMore}
          >
            Ver más 👀
          </button>

          <button type="button" className="btn btn-dark btn-sm w-50">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza