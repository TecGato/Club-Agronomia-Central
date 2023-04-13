import React from 'react'

export default function FutInF() {
  return (
    <div className='m-4'>
    <h1 className='text-4xl font-bold text-gray-800 text-center p-5 m-3'>Baby Futbol</h1>
    
    <div className="grid grid-cols-1 grid-rows-9 md:grid-cols-2 place-items-center">

      <img src='https://img.freepik.com/foto-gratis/ninos-tiro-completo-jugando-al-futbol_23-2149270951.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais' alt='futbol infantil' loading='lazy' className='hidden md:block w-full' />

      <div className='relative w-full row-span-3'>
        <img src='https://img.freepik.com/foto-gratis/nino-tiro-completo-campo-futbol_23-2149270952.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais' alt='futbol infantil' loading='lazy' className='w-full row-span-3 z-0' />
        <div className='absolute inset-0 md:bg-green-800 md:opacity-50'></div>
      </div>

      <p className='text-base text-gray-700 leading-6 p-7 m-5 md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12'>Por más de 40 años el club compite en baby futbol, en los primeros años en liga argentina, pasando por FAFI y actualmente en FEFI. El baby futbol es una actividad tanto a niños como a familiares que disfrutan de hermosas jornadas viendo crecer y divertir a sus seres queridos.</p>

      <div className='relative w-full hidden md:block '>
       <img src='https://img.freepik.com/foto-gratis/nino-tiro-completo-entrenando-pelota_23-2149270945.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais' alt='futbol infantil' loading='lazy' className='hidden md:block w-full  z-0' />
       <div className='absolute inset-0 md:bg-green-800 md:opacity-50'></div>
      </div>
      
      <div className='relative row-span-3 w-full'>
        <img src='https://img.freepik.com/foto-gratis/nino-tiro-completo-campo-futbol_23-2149270917.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=ais' alt='futbol infantil' loading='lazy' className='w-full row-span-3 z-0' />
        <div className='absolute inset-0 md:bg-green-800 md:opacity-50'></div>
      </div>

      <p className='text-base text-gray-700 leading-6 p-7 m-5  md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12'>Este deporte se realiza con chicos que van <strong>desde los 6 años hasta los 13 años</strong>, que encuentren en el mismo, un sano espacio de recreación e iniciación en el deporte, como así también, medición de aptitudes deportivas contra otros niños de similar edad.</p>

      <img src='https://img.freepik.com/foto-gratis/entrenamiento-futbol-infantil-tiro-completo_23-2149270943.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais' alt='futbol infantil' loading='lazy' className='w-full' />

      <p className='text-base text-gray-700 leading-6 p-7 m-5  md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12'>Las tiras selectivo matutino y color, practican los días martes y viernes. <strong>De 18.00hs a 19.00</strong> las categorías 2017/2016/2015, <strong>de 19.00hs a 20.00hs</strong> las categorías 2014/2013 y <strong>de 20.00hs a 21.00hs</strong> las categorías 2012/2011/2010, las mismas son dictadas por los profes <em>Diego, Gonzalo, Román, Lucas</em></p>

      <p className='text-base text-gray-700 leading-6 p-7 m-5  md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12'>La tira de letra practica los días <strong>lunes y miércoles de 17.00hs a 18.00hs</strong> categorías 2016/2015, <strong>de 18.00hs a 19.00hs</strong> categorías 2014/2013 y <strong>de 19.00hs a 20.00hs</strong> las categorías 2012/2011/2010, con los profes <em>Juan y Julián</em>.</p>

      <img src='https://img.freepik.com/foto-gratis/nino-tiro-medio-sosteniendo-pelota_23-2149270953.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais' alt='futbol infantil' loading='lazy' className='w-full' />
    </div>
  </div>
  )
}
