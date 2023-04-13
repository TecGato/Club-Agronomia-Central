import React from 'react';
import Image from 'next/image';
import { HeaderTitle } from '@/components/HeaderTitle';
import { images } from './images'


export default function TrainingCenter() {
  
  return (
    <div>
      <HeaderTitle images={images} />
      <h1>Atenea Sports</h1>

      <h3>Centro de entrenamiento y readaptación deportiva.</h3>

      <p>Atenea Sports es un espacio dedicado al entrenamiento, la readaptación deportiva y la rehabilitación de lesiones.</p>

      <p>Desde una concepción integral y funcional de la persona, nuestro objetivo es ayudar a la persona a alcanzar su mejor versión, teniendo en cuenta sus objetivos, posibilidades y necesidades.</p>

      <p>Cada sesión, cada trabajo y cada ejercicio está pensado por nuestros profesionales para que vivas el deporte, el ejercicio y la actividad física con la misma calidad que lo hacen los profesionales.</p>

      <em>#EntrenaDistinto #RehabilitateMejor</em>
      <br />

      <a href='https://instagram.com/ateneasports'>
        <Image src="/instagram-logo.svg" alt="Logo de Instagram" width={30} height={30} />
      </a>

    </div>
  )
}
