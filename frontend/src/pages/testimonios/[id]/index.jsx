import { Layout } from '@/components/Page';

export default function Testimony({ testimonials }) {
    return (
        <Layout
            title={testimonials.title}
            image={'https://img.freepik.com/foto-gratis/joven-corredor-atar-cordones_1421-46.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'}
        >
            <div className="mx-4 my-7 py-5 shadow-2xl grid">
                <img
                    src={testimonials.picture.secure_url}
                    alt={testimonials.title}
                    loading='lazy'
                    className='place-self-center'
                />
                <p className='text-base text-gray-700 dark:text-slate-300 leading-6 px-5 pt-0'>
                    {testimonials.description.split('')}
                </p>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const response = await fetch('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/testimonials');
    const testimonials = await response.json();

    const paths = testimonials.map(testimonial => ({ params: { id: testimonial._id } }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/testimonials/${params.id}`);
    const testimonials = await res.json();

    return {
        props: {
            testimonials,
        },
    };
};