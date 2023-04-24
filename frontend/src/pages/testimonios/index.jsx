import { Layout, TestimonialItem } from '@/components/Page';
import axios from 'axios';
import usePagination from '@/components/Page/Pagination';
import Link from 'next/link';

export default function Testimonials({ testimonials }) {
    // paginado
    const { currentItems, pages, currentPage, setCurrentPage } = usePagination(
        testimonials,
        3
    );

    return (
        <Layout
            title={'Testimonios'}
            image={
                'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/01/07110707/What-Your-Video-Interview-Background-Really-Says-About-You-2.jpg'
            }
        >
            <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-10 px-5 gap-5 w-full h-full">
                {
                    currentItems?.map(testimonial =>
                        <Link href={`/testimonios/${testimonial.id}`} key={testimonial.id}>
                            <TestimonialItem
                                title={testimonial.title}
                                text={testimonial.description}
                                img={testimonial.picture.secure_url}
                            />
                        </Link>
                    )
                }
            </section>

            {/* Paginado */}
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

export async function getServerSideProps() {
    const res = await axios.get('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/testimonials');
    const testimonials = res.data;
    return {
        props: {
            testimonials,
        },
    };
};