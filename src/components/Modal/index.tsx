import Image from 'next/image'
import React from 'react'

export const Modal = () => {
  return (
    <section className='h-screen w-screen backdrop-blur fixed top-0 left-0 z-50 flex items-center justify-center pr-10 pl-5'>
        <div className='bg-purple-950 w-full rounded py-2 px-8'>
            <header className='flex justify-end'>
              X
            </header>
            <div className='flex gap-6 mb-4'>
                <figure className='bg-light-gray-200 max-h-[35rem] h-[35rem] max-w-md w-[40rem] rounded'>
                  d
                </figure>
                <article className='flex flex-col gap-8 py-4'>
                    <div className='flex flex-col gap-3'>
                      <div className='flex gap-2 items-end'>
                        <h2 className='text-5xl text-white font-bold '>
                          Guardiões da Galáxia Vol. 2
                        </h2>
                        <span className='text-2xl text-gray-500'>
                          (2017)
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-gray-300 text-lg rounded border px-[6px]'>
                          12
                        </span>
                        <Image src='/star.svg' alt='star' height='12' width='12'/>
                        <span className='text-gray-300 text-lg'>
                          Ação, Ficção científica
                        </span>
                        <Image src='/star.svg' alt='star' height='12' width='12'/>
                        <span className='text-gray-500 text-lg'>
                          2h 17m
                        </span>
                      </div>
                    </div>
                    <div className='relative grid place-items-center w-max h-max' >
                      <Image src='/star.svg' alt='star' width='76' height='76'/>
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1 font-bold text-xl">67</span>
                    </div>
                    <div>
                      <h3 className='text-white font-medium text-3xl mb-2'>
                        Sinopse
                      </h3>
                      <p className='text-gray-300 text-lg'>
                        Atravessando os confins do cosmos, os Guardiões terão que lutar para manter sua 
                        recém-descoberta família unida enquanto desvendam o mistério da real ascendência 
                        de Peter Quill. Antigos inimigos se tornam aliados durante essa busca.
                      </p>
                    </div>
                    <div className='flex flex-wrap gap-14'>
                      <div>
                        <h4 className='font-bold text-2xl text-white'>James Gunn</h4>
                        <span className='font-light text-base text-gray-300'>Diretor, Escritor</span>
                      </div>
                      <div>
                        <h4 className='font-bold text-2xl text-white'>Dan Abnett</h4>
                        <span className='font-light text-base text-gray-300'>Escritor</span>
                      </div>
                      <div>
                        <h4 className='font-bold text-2xl text-white'>Andy Lanning</h4>
                        <span className='font-light text-base text-gray-300'>Escritor</span>
                      </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}
