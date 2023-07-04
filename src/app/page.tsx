import Image from 'next/image'


export default function Home() {
  return (
    <main className='h-[calc(100vh-5rem)] bg-home bg-cover bg-no-repeat'>
     <div className="h-full  bg-gradient-to-r from-gray-900 to-transparent py-32 px-32">
      <div className='max-w-2xl flex flex-col gap-2'>
          <h1 className='font-display font-black text-white text-[4rem] leading-[4rem]'>
            <strong className='text-red-500'>Filmes</strong>  para todas as pessoas<strong className='text-red-500'>.</strong>
          </h1>
          <h2 className='text-white text-3xl'>
            Assista a qualquer filme, em qualquer lugar
            por apenas <strong className='font-display text-red-500 font-bold'>R$ 19,99</strong> 
          </h2>
          <button className='subscribe'>
            <Image src='/play.svg' alt='play' width='28' height='32' className='w-6 h-8'/>
            Assine agora
          </button>
      </div>
     </div>
    </main>
  )
}
