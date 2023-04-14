import { Layout, TestimonialItem } from '@/components';
import React from 'react';

export default function Testimonials() {
    return (
        <Layout>
            <div>Testimonials</div>
            <section className="grid grid-cols-2 w-full h-full">
                <TestimonialItem
                    title={'Messi mostrando su paso por club agronomia central'}
                    text={
                        'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
                    }
                    img={
                        'https://estaticos-cdn.sport.es/clip/442a2a82-dbc4-46a0-a354-51809255fbf3_alta-libre-aspect-ratio_default_0.jpg'
                    }
                />
                <TestimonialItem
                    title={'Messi mostrando su paso por club agronomia central'}
                    text={
                        'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
                    }
                    img={
                        'https://estaticos-cdn.sport.es/clip/442a2a82-dbc4-46a0-a354-51809255fbf3_alta-libre-aspect-ratio_default_0.jpg'
                    }
                />
            </section>
        </Layout>
    );
}
