import React, {useState} from 'react'

export default function ProductCard({ productDescription }) {
  const {images, title, price, id} = productDescription
  const [src, setSrc] = useState(images[0])
  const url = `/products/${id}.html`

  const showHover = () => setSrc(images[1])
  const hideHover = () => setSrc(images[0])
  
  return (
    <>
      <div className="col-4">
        <div className="card">
          <img
            src={src}
            className="card-img-top img-fluid"
            alt={title}
            onMouseOver={showHover}
            onMouseLeave={hideHover}
          />
          <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{price}</p>
            <a href={url} className="btn btn-outline-primary">Заказать</a>
          </div>
        </div>
      </div>
    </>
  );
  
}
