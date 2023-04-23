import axios from 'axios';
import { useTestimonials } from '@/hooks';
import { Layout, TestimonialItemDashboard, ButtonCreate, WarnDelete, FormNews } from '@/components/Dashboard';

export default function Testimonials({ testimonials }) {

    const {
        showModalForm,
        showModalWarn,
        showModalModify,
        createTestimonial,
        setCreateTestimonial,
        showWarn,
        showForm,
        handlerDelete,
        handlerCreate,
        id,
        setId
    } = useTestimonials();

    return (
        <Layout>
            <ButtonCreate
                showModalForm={showModalForm}
                setCreateTestimonial={setCreateTestimonial}
            />
            <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-10 px-5 gap-5 w-full h-full">
                {
                    testimonials.map(testimonial => (
                        <TestimonialItemDashboard
                            key={testimonial._id}
                            title={testimonial.title}
                            text={testimonial.description}
                            img={testimonial.picture.secure_url}
                            showModalWarn={showModalWarn}
                            setId={setId}
                            id={testimonial._id}
                        />
                    ))
                }
            </section>
            {showWarn && (
                <WarnDelete
                    handlerDelete={handlerDelete}
                    showModalWarn={showModalWarn}
                    id={id}
                />
            )}
            {showForm && (
                <FormNews
                    showModalForm={showModalForm}
                    handlerCreate={handlerCreate}
                    createTestimonial={createTestimonial}
                />
            )}

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
