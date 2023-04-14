import React from 'react';
import Image from 'next/image';
import { InfoSlider } from '@/components/InfoSlider';
import { Layout } from '@/components';
import { images } from './images';

export default function TrainingCenter() {
    return (
        <Layout image={images[1].src} title="ATENEA SPORTS">
            <InfoSlider images={images} />
        </Layout>
    );
}
