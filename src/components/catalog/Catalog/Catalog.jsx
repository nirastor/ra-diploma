import React from 'react'
import CatalogCategories from '../CatalogCategories/CatalogCategories'
import CatalogProduct from '../CatalogProducts/CatalogProducts'
import CatalogSearch from '../CatalogSearch/CatalogSearch'

export default function Catalog({ hasSearch }) {
  return (
    <>
      {hasSearch && <CatalogSearch />}
      <CatalogCategories />
      <CatalogProduct />
    </>
  );
}
