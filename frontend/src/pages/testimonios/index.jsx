import { Layout, TestimonialItem } from '@/components/Page';
import usePagination from '@/components/Page/Pagination';

const items = [
    <TestimonialItem
        title={'Mostrando su paso por club agronomia central'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://img.freepik.com/fotos-premium/pareja-joven-corriendo-pista-forestal_35721-285.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph'
        }
    />,
    <TestimonialItem
        title={'Entrevistado luego de ganar el balón de oro'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://img.freepik.com/foto-gratis/determinada-mujer-construccion-muscular-corriendo-mientras-hace-ejercicio-naturaleza-copiar-espacio_637285-4877.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
        }
    />,
   <TestimonialItem
        title={'Hablando con club agronomia central cuenta su experiencia'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://img.freepik.com/foto-gratis/retrato-mujer-sonriente-fitness-auriculares_171337-13384.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
        }
    />,
    <TestimonialItem
        title={'El mejor jugador del mundo'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://img.freepik.com/foto-gratis/mujer-embarazada-tiro-medio-estera-yoga_23-2150310657.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
        }
    />,
    <TestimonialItem
        title={'Visita nuestro club agronomia central'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://img.freepik.com/fotos-premium/kickboxing-fitness-retrato-atleta-mujer-haciendo-ejercicio-cardiovascular-mientras-entrena-partido-ejercicio-deportivo-boxeadora-preparandose-pelea-gimnasio-salud-bienestar-deportivo_590464-121460.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
        }
    />,
    <TestimonialItem
        title={'Mostrando sus habilidades'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://img.freepik.com/foto-gratis/estudio-formacion-mujer-forma-disparo-completo_23-2149137062.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
        }
    />,
    <TestimonialItem
        title={'Gana nuevamente balón de oro'}
        text={
            'De suplente a capitan en agronomia para ganar el mundial, en entrevista mostrando como gano'
        }
        img={
            'https://img.freepik.com/fotos-premium/mujer-bonita-fitness-botella-agua_1194-255449.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
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
