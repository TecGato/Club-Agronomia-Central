import { Layout, TestimonialItem } from '@/components/Page';
import axios from 'axios';

export default function Testimonials({ testimonials }) {
    return (
        <Layout
            title={'Historias en primera persona'}
            image={
                'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/01/07110707/What-Your-Video-Interview-Background-Really-Says-About-You-2.jpg'
            }
        >
            <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-10 px-5 gap-5 w-full h-full">
                {
                    testimonials?.map(testimonial =>
                        <TestimonialItem
                            title={testimonial.title}
                            text={testimonial.description}
                            img={testimonial.picture.secure_url}
                        />
                    )
                }
            </section>
        </Layout>
    );
}

export async function getServerSideProps() {
    const res = await axios.get('http://localhost:3001/api/testimonials');
    const testimonials = res.data;
    return {
        props: {
            testimonials,
        },
    };
};