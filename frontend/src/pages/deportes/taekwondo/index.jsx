import React from 'react'
import { InfoSlider } from '@/components/InfoSlider';
import { Layout } from "@/components";
import { images, info } from './taekwondo';

export default function Taekwondo() {
  return (
    <Layout image={images[4].src} title="TAEKWONDO">
      <InfoSlider images={images} info={info}/>
    </Layout>
  );
};
