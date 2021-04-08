import React, { useState, useEffect } from 'react';
import ProductCard from '../../ProductCard/ProductCard';

// ** Очень похоже на хиты. Возможно стоит объеденить в один компонент

export default function CatalogProduct() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:7070/api/items')
    .then(r => r.json())
    .then(d => setProducts(d))
  },[])
  
  return (
    <>
      <div className="row">
        {products.map(prod => <ProductCard key={prod.id} productDescription={prod}/>)}
      </div>
    </>
  );
}
