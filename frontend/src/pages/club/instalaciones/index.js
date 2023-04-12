import React from 'react'
import Image from 'next/image'
import Entrada from '../../../../public/instalaciones-img/Imagen1.jpg'
import Cocina from '../../../../public/instalaciones-img/Imagen2.jpg'
import Mesas from '../../../../public/instalaciones-img/Imagen3.jpg'
import Quincho from '../../../../public/instalaciones-img/Imagen4.jpg'
import Salon from '../../../../public/instalaciones-img/Imagen5.jpg'
import Salon2 from '../../../../public/instalaciones-img/Imagen6.jpg'
import Cancha from '../../../../public/instalaciones-img/Imagen7.jpg'
import Cancha2 from '../../../../public/instalaciones-img/Imagen8.jpg'
import { Navbar } from '@/components'
export default function Instalations() {
  return (
    <>
      <Navbar />
      <div className='flex-col '>
      <h1 className='text-center text-3xl font-bold '>Instalaciones</h1>
      <div>
        <h2 className='text-center text-2xl font-bold'>BUFFET</h2>
        <div className='flex justify-between m-12 '>
        <Image src={Entrada} alt='entrada' className='rounded-lg max-w-xs' />
        <Image src={Cocina} alt='cocina' className='rounded-lg max-w-xs' />
        <Image src={Mesas} alt='mesas' className='rounded-lg max-w-xs' />
        </div>
        <p className='text-center'>
        Buffet, económico, familiar con ambiente climatizado.
        desayuno, almuerzo y cenas.
        abierto de lunes a sábados de 8:00 am a 00:00am
        </p>
      </div>
      <div>
        <h2 className='text-center text-2xl font-bold'>Quincho</h2>
        <div className='flex justify-center'>
        <Image src={Quincho} alt='entrada' className=' rounded-lg max-w-xs ' />
        </div>
        <p className='text-center'>
        Nuestra sede cuenta con un quincho cerrado con cómodas instalaciones de casi 50 m2, con capacidad para 60 personas sentadas,
        con 3 parrillas, equipado con mesas y sillas, televisor, freezer, heladeras, cocina industrial, 2 baños para disfrutar de todo
        tipo de evento de día o de noche.
        </p>
        <p className='text-center'>
        Reuniones en familia - Agasajos - Almuerzos empresariales - Cumpleaños - Casamientos - Bautismos, Comuniones, Bar y Mat Mitzva - Aniversarios - Fiestas de fin de año - Despedidas
        </p>
        <p className='text-center'>
        Te esperamos con todo placer en nuestro quincho, para mostrarte las instalaciones y comentarte nuestra propuesta. Acércate al Club Social y Deportivo Agronomía Central estamos en Bauness 958 CABA puedes llamarnos al 4524-2225 o escribirnos  a clubagronomiacentral@gmail.com
        </p>
      </div>
      <div>
        <h2 className='text-center text-2xl font-bold'>Salon de Fiestas</h2>
        <div className='flex justify-around m-12 '>
        <Image src={Salon} alt='salon' className='rounded-lg ' />
        <Image src={Salon2} alt='salon' className='rounded-lg ' />
        </div>
        <p className='text-center'>
        Club Agronomía Central un lugar único y distinguido en pleno barrio de Parque Chas.
        Nuestro salón cuenta con más de 30 años de experiencia ofreciendo calidad y excelencia.
        Sus cómodas instalaciones de casi 200 m2 que se adaptan, mediante distintas alternativas de equipamiento y decoración, al tipo de evento que usted esté planeando. Ofreciendo una capacidad para 120 personas o 60 personas en la modalidad de medio salón y dispone de acondicionadores de aire que aseguran en todo momento un confortable ambiente. Cuenta con una barra de tragos y está equipado con 2 freezer, heladera, cocina industrial, cabina de disc-jockey, parrilla de luces de colores, mesas y sillas. Para disfrutar de todo tipo de evento de día o de noche.
        </p>
      </div>
      <div>
        <h2 className='text-center text-2xl font-bold'>Canchas</h2>
        <div className='flex justify-around m-12 '>
        <Image src={Cancha} alt='cancha' className='rounded-lg' />
        <Image src={Cancha2} alt='cancha'  />
        </div>
        <p className='text-center'>
        El club con dos canchas una modalidad de futbol 5 y una cancha auxiliar más chica donde se realizan entrenamientos y también está disponible para el alquiler cuando se alquila el quincho para fiestas infantiles. las dos canchas son techadas.
        </p>
      </div>
      </div>
    </>
  )
}
