import React from 'react'
import Hits from '../Hits/Hits'

export default function MainPage() {
  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Hits />
      </section>

      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <div>Тут каталог</div> 
      </section>
    </>
  );
}