import React, { useState, useEffect } from 'react';

export default function Hits() {
  const [hits, setHits] = useState([])

  useEffect(() => {
    fetch('http://localhost:7070/api/top-sales.')
    .then(r => r.json())
    .then(d => console.log(d))
  },[])
  
  return(
    <>
      <div className="row">
        <div>Продукт</div>
        <div>Продукт</div>
        <div>Продукт</div>
      </div>
      
    </>
  )
}
