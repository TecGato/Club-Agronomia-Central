import { Layout, TestimonialItem } from '@/components';
import React from 'react';

export default function Testimonials() {
    return (
        <Layout
            title={'Historias en primera persona'}
            image={
                'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/01/07110707/What-Your-Video-Interview-Background-Really-Says-About-You-2.jpg'
            }
        >
            <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-10 px-5 gap-5 w-full h-full">
                <TestimonialItem
                    title={'Messi mostrando su paso por club agronomia central'}
                    text={
                        'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
                    }
                    img={
                        'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
                    }
                />
                <TestimonialItem
                    title={'Messi mostrando su paso por club agronomia central'}
                    text={
                        'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
                    }
                    img={
                        'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
                    }
                />
                <TestimonialItem
                    title={'Messi mostrando su paso por club agronomia central'}
                    text={
                        'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
                    }
                    img={
                        'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
                    }
                />
                <TestimonialItem
                    title={'Messi mostrando su paso por club agronomia central'}
                    text={
                        'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
                    }
                    img={
                        'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
                    }
                />
            </section>
        </Layout>
    );
}
