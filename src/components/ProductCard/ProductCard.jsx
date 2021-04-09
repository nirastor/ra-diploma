/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState } from 'react'

export default function ProductCard({ productDescription, inCatalog }) {
  const {images, title, price, id} = productDescription
  
  const [src, setSrc] = useState(images[0])

  const url = `/products/${id}.html`

  const showHover = () => setSrc(images[1])
  const hideHover = () => setSrc(images[0])

  const cardClass = inCatalog ? "card catalog-item-card" : "card"

  return (
    <>
      <div className="col-4">
        <div className={cardClass}>
          { src
            ? <img
                src={src}
                className="card-img-top img-fluid"
                alt={title} onMouseOver={showHover}
                onMouseLeave={hideHover}
              />
            : <div className="card-img-top">Нет изображения</div>
          }
          <div className="card-body">
            <p className="card-text card-title">{title}</p>
            <div className="card-bottom">
              <p className="card-text">{price}</p>
              <a href={url} className="btn btn-outline-primary">Заказать</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}
