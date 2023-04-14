import React from 'react';
import { HeaderTitle } from '@/components/HeaderTitle';
import { InfoSlider } from '@/components/InfoSlider';
import { Layout } from "@/components";
import { images } from './images'

export default function TrainingCenter() {
  return (
    <Layout>
      <HeaderTitle image={images[1].src} title='ATENEA SPORTS' />
      <InfoSlider images={images} />
    </Layout>
  );
};