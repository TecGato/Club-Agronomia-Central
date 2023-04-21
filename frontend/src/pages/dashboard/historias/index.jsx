import axios from 'axios';
import { Layout, TestimonialItemDashboard, ButtonCreate } from '@/components/Dashboard';

export default function Testimonials({ testimonials }) {
    return (
        <Layout>
            <ButtonCreate />
            <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-10 px-5 gap-5 w-full h-full">
                {
                    testimonials.map(testimonial => (
                        <TestimonialItemDashboard
                            key={testimonial._id}
                            title={testimonial.name}
                            text={testimonial.testimony}
                            img={testimonial.picture}
                        />
                    ))
                }
            </section>
        </Layout>
    );
};


export async function getServerSideProps() {
    const res = await axios.get('http://localhost:3001/api/testimonials');
    const testimonials = res.data;
    return {
        props: {
            testimonials,
        },
    };
};
