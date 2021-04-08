import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

export default function Hits() {
  const [hits, setHits] = useState([])

  useEffect(() => {
    fetch('http://localhost:7070/api/top-sales')
    .then(r => r.json())
    .then(d => setHits(d))
  },[])
  
  return(
    <>
      <div className="row">
        {hits.map(hit => <ProductCard key={hit.id} productDescription={hit}/>)}
      </div>
    </>
  )
}
