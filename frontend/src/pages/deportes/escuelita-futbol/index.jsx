import { Layout } from '@/components/Page';

export default function Escuelita() {
    return (
        <Layout 
            title='Escuelita de Fútbol'
            image='https://img.freepik.com/fotos-premium/pelota-futbol-encuentra-agua-hielo-fondo_853115-1530.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph'
        >
            <div  className="m-4 grid md:grid-cols-3">
                <div className='md:rounded-l-lg bg-zinc-100 col-span-1 grid'>
                    <p className="text-base text-gray-700 leading-6 p-7 place-self-center">
                        Los {''}
                        <strong>
                            martes y viernes de 17.00hs a 18.00hs
                        </strong>
                        , se lleva a cabo en nuestra institución “El Jardín De Futbol” con nuestros profes {''}
                        <em>
                            Román, Gonzalo y Pablo
                        </em>
                        , actividad iniciadora en el deporte, que admite la participación de {''}
                        <strong>
                            niñas y niños de 3 a 5 años.
                        </strong> {''}
                    </p>
                    <img 
                        src='https://img.freepik.com/fotos-premium/nino-pateando-pelota-pie-descalzo-mientras-jugaba-futbol-callejero-campo-hierba-verde_34141-412.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais'
                        alt='futbol infantil'
                        loading='lazy'
                        className='md:rounded-bl-lg'
                    />
                </div>

                <img 
                    src='https://img.freepik.com/foto-gratis/nino-jugando-pelota-futbol-afuera-junto-otros-ninos_23-2148631501.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais'
                    alt='futbol infantil'
                    loading='lazy'
                    className=' col-span-1'
                />
                <div className='md:rounded-r-lg bg-zinc-100 col-span-1 grid'>
                    <img 
                        src='https://img.freepik.com/fotos-premium/bola-patadas-nino_236854-1800.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais'
                        alt='futbol infantil'
                        loading='lazy'
                        className='md:rounded-tr-lg'
                    />
                    <p className="text-base text-gray-700 leading-6 p-7 place-self-center">
                        Con la incorporación de esta actividad se brinda a los más chiquitos un espacio de juegos y conocimientos iniciadores del futbol, que año tras año irán adquiriendo nuevos conocimientos y potenciando nuevas sus habilidades.
                    </p>
                </div>
            </div>
        </Layout>
    )
}