import { Layout, TestimonialItemDashboard, ButtonCreate } from '@/components/Dashboard';

export default function Testimonials() {
    return (
        <Layout>
            <ButtonCreate />
            <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-10 px-5 gap-5 w-full h-full">
                <TestimonialItemDashboard
                    title={'Messi mostrando su paso por club agronomia central'}
                    text={
                        'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
                    }
                    img={
                        'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
                    }
                />
                <TestimonialItemDashboard
                    title={'Messi mostrando su paso por club agronomia central'}
                    text={
                        'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
                    }
                    img={
                        'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
                    }
                />
                <TestimonialItemDashboard
                    title={'Messi mostrando su paso por club agronomia central'}
                    text={
                        'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
                    }
                    img={
                        'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
                    }
                />
                <TestimonialItemDashboard
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
