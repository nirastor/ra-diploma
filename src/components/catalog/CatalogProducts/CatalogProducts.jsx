/* eslint-disable react-hooks/exhaustive-deps */

/**
 * Очень похоже на хиты.
 * Возможно стоит объеденить в один компонент
 * А может и нет. Этот сложнее
*/

import React, { useState, useEffect } from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import axios from 'axios'

export default function CatalogProduct() {
  const OFFSET_STEP = 6
  const URL = 'http://localhost:7070/api/items'
  
  const [products, setProducts] = useState([])
  const [offset, setOffset] = useState(OFFSET_STEP)
  const [showMoreButton, setShowMoreButton] = useState(true)
  
  const categoryId = useSelector((state => {
    const cid = state.catalog.categoryId
    return cid ? cid : null
  }))
  
  useEffect(() => {
    axios(URL, {params: {categoryId, offset: null}})
      .then(r => {
        setProducts(r.data)
        setOffset(OFFSET_STEP)
        setShowMoreButton(true)
      })
  }, [categoryId])

  const loadMore = () => {
    axios(URL, {params: {categoryId, offset}})
      .then(res => {
        setProducts([...products, ...res.data])
        setOffset(offset + OFFSET_STEP)
        if (res.data.length < 6) {
          setShowMoreButton(false)
        }
    })
  }

  return (
    <>
      <div className="row mb-4">
        {products.map(prod => <ProductCard key={prod.id} productDescription={prod} inCatalog={true}/>)}
      </div>
      {showMoreButton &&
        <div className="text-center">
          <button className="btn btn-outline-primary" onClick={loadMore}>Загрузить ещё</button>
        </div>
      }
    </>
  );
}
