import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios'

export default function Hits() {
  const [hits, setHits] = useState([])

  useEffect(() => {
    axios('http://localhost:7070/api/top-sales')
      .then(r => setHits(r.data))
  },[])
  
  return(
    <>
      <div className="row">
        {hits.map(hit => <ProductCard key={hit.id} productDescription={hit}/>)}
      </div>
    </>
  )
}
