import React from 'react';
import Image from 'next/image';
import { HeaderTitle } from '@/components/HeaderTitle';
import { InfoSlider } from '@/components/InfoSlider';
import { images } from './images'


export default function TrainingCenter() {
  
  return (
    <div>
      <HeaderTitle image={images[3].src} title='ATENEA SPORTS' />
      <InfoSlider images={images} />

      <em>#EntrenaDistinto #RehabilitateMejor</em>
      <br />

      <a href='https://instagram.com/ateneasports'>
        <Image src="/instagram-logo.svg" alt="Logo de Instagram" width={30} height={30} />
      </a>
    </div>
  );
};
