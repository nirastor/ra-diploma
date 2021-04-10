/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductQuantity from '../ProductQuantity/ProductQuantity';
import ProductSizes from '../ProductSizes/ProductSizes';

export default function ProductPage({ match }) {
  const id = Number(match.params.id.split('.')[0])

  const [product, setProduct] = useState();
  const [selectedSize, setSelectedSize] = useState(null)

  useEffect(() => {
    axios(`http://localhost:7070/api/items/${id}`)
      .then((r) => {
        setProduct(r.data)
      })
  },[])

  if (!product) return null
  
  console.log(product)
  const {title, sku, manufacturer, color, material, season, reason, sizes } = product
  const src = product.images[0]

  const hasSizes = sizes.filter(s => s.avalible).length
  const choiseControls = hasSizes
    ? <>
        <ProductSizes sizes={sizes} />
        <p>{selectedSize}</p>
        <p>
          Количество: 
          <ProductQuantity />
        </p>
      </>
    : 'Нет в наличии'

  return (
    <>
      <section className="catalog-item">
        <h2 className="text-center">{title}</h2>
        <div className="row">
          <div className="col-5">
            <img
              src={src}
              className="img-fluid" alt=""
            />
          </div>
          <div className="col-7">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Артикул</td>
                  <td>{sku}</td>
                </tr>
                <tr>
                  <td>Производитель</td>
                  <td>{manufacturer}</td>
                </tr>
                <tr>
                  <td>Цвет</td>
                  <td>{color}</td>
                </tr>
                <tr>
                  <td>Материалы</td>
                  <td>{material}</td>
                </tr>
                <tr>
                  <td>Сезон</td>
                  <td>{season}</td>
                </tr>
                <tr>
                  <td>Повод</td>
                  <td>{reason}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              {choiseControls}
            </div>
            <button className="btn btn-danger btn-block btn-lg">В корзину</button>
          </div>
        </div>
      </section>
    </>
  );
}