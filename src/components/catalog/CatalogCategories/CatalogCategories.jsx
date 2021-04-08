/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

export default function CatalogCategories() {
  const [categories, setCategories] = useState([])
  const [selectedId, setSelectedID] = useState(0)

  useEffect(() => {
    fetch('http://localhost:7070/api/categories')
    .then(r => r.json())
    .then(d => {
      d.unshift({id: 0, title: "Все"})
      setCategories(d)
    })
  }, []);

  const getLinkClass = (id) => selectedId === id ? "nav-link active" : "nav-link";

  const handleClick = (e, id) => {
    e.preventDefault()
    setSelectedID(id)
  } 
  
  return (
    <>
      <ul className="catalog-categories nav justify-content-center">
        {categories.map(cat => (
          <li className="nav-item">
            <a className={getLinkClass(cat.id)} href="#" onClick={(e) => handleClick(e, cat.id)}>{cat.title}</a>
          </li>))
        }
      </ul>
    </>
  );
}
