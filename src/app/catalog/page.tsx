import Image from 'next/image'
import React from 'react'

export default function Catalog() {
  return (
    <main className='min-h-[calc(100vh-5rem)] bg-catalog bg-cover bg-no-repeat'>
      <section className="catalog-section-one bg-gradient-to-t from-gray-800 via-gray-800/60 to-gray-900">
        <h1 className='text-white font-bold text-7xl'>
          Catálogo
        </h1>
      </section>
      <section className="bg-gray-800 relative container ">
        <div className='bottom-48 absolute z-10 container'>
          <div className='flex pb-2 justify-between'>
            <h2 className='text-white font-medium text-2xl'>
              Principais Filmes
            </h2>
            <form>
              <input type="text" placeholder='Pesquisar'/>
              <button type="submit">
                <Image src='/search.svg' alt='search' height='15' width='15'/>
              </button>
            </form>
          </div>
          <div>
            {/* Cards */}
          </div>
        </div>
      </section>
    </main>
  )
}
