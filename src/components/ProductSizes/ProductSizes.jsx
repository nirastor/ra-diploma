import React, { useState } from 'react'

/** Кажется дублирование с выбором категории в каталоге*/

export default function ProductSizes({ sizes }) {
  console.log(sizes)
  const [selectedSize, setSelected] = useState(null)

  const getSizeClass = (size) => size === selectedSize ? 'catalog-item-size selected' : 'catalog-item-size'

  const clickHandler = (size) => setSelected(size)

  const dysplaySized = sizes
    .filter(s => s.avalible)
    .map((s) =>  (
      <span
        className={getSizeClass(s.size)}
        key={s.size}
        onClick={() => clickHandler(s.size)}
      >
        {s.size}
      </span>
    ))

  return (
    <>
      <p>Размеры в наличии: {dysplaySized}</p>
    </>
  );
}