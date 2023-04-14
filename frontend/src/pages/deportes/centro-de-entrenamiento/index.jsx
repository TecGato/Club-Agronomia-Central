import React from 'react';
import { InfoSlider } from '@/components/InfoSlider';
import { Layout } from "@/components";
import { images, info } from './images'


export default function TrainingCenter() {
  return (
    <Layout image={images[1].src} title="ATENEA SPORTS">
      <InfoSlider images={images} info={info}/>
    </Layout>
  );
};