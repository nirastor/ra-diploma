import React from 'react'

export default function ProductCard() {
  return (
    <>
      <div className="col-4">
        <div className="card">
          <img
            src="https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg"
            className="card-img-top img-fluid"
            alt="Босоножки 'MYER'"
          />
          <div className="card-body">
            <p className="card-text">Босоножки 'MYER'</p>
            <p className="card-text">34 000 руб.</p>
            <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
          </div>
        </div>
      </div>
    </>
  );
  
}
