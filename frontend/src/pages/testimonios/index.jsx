import { Layout, TestimonialItem } from '@/components/Page';
import usePagination from '@/components/Page/Pagination';

const items = [
    <TestimonialItem
        title={'Messi mostrando su paso por club agronomia central'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
        }
    />,
    <TestimonialItem
        title={'Messi mostrando su paso por club agronomia central'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
        }
    />,
   <TestimonialItem
        title={'Messi mostrando su paso por club agronomia central'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
        }
    />,
    <TestimonialItem
        title={'Messi mostrando su paso por club agronomia central'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
        }
    />,
    <TestimonialItem
        title={'Messi mostrando su paso por club agronomia central'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
        }
    />,
    <TestimonialItem
        title={'Messi mostrando su paso por club agronomia central'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
        }
    />,
    <TestimonialItem
        title={'Messi mostrando su paso por club agronomia central'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://static.eldiario.es/clip/87dc30f7-32fb-45f6-a9cd-45efd700e48d_16-9-discover-aspect-ratio_default_0.jpg'
        }
    />
];


export default function Testimonials() {
    const { currentItems, pages, currentPage, setCurrentPage } = usePagination(
        items,
        3
      );
    
    return (
        <Layout
            title={'Historias en primera persona'}
            image={
                'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/01/07110707/What-Your-Video-Interview-Background-Really-Says-About-You-2.jpg'
            }
        >
            <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-10 px-5 gap-5 w-full h-full">
                {currentItems.map(item => {
                    return item
                })}
            </section>

            <div className="flex space-x-2 justify-center p-5">
                {pages.map((page) => (
                <button
                    key={page}
                    className={`px-3 py-1 rounded ${
                    currentPage === page + 1
                        ? 'bg-blue-700 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setCurrentPage(page + 1)}
                >
                    {page + 1}
                </button>
                ))}
            </div>
        </Layout>
    );
}
