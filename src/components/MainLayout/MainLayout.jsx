import React from 'react'
import Banner from '../Banner/Banner'

export default function MainLayout({ children }) {
  return (
    <>
      <main class="container">
        <div class="row">
          <div class="col">
            <Banner />
            {children}
          </div>
        </div>
      </main>
    </>
  )
}