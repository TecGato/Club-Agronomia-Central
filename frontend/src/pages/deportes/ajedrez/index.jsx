import { Layout } from '@/components/Page';
import { MatchesInfo } from '@/components/Page/MatchesInfo';
export default function Chess({data}) {
    return (
        <Layout
            title="Club De Ajedrez Zugzwang"
            image="https://img.freepik.com/fotos-premium/visualizacion-figurativa-idea-estrategia-empresarial-forma-juego-ajedrez_124507-32323.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
        >
            <div className="m-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center">
                    <img
                        src="https://wallpaperaccess.com/full/8357317.jpg"
                        alt="imagen de ajedrez"
                        loading="lazy"
                        className="w-full"
                    />

                    <p className="text-base text-gray-700 dark:text-slate-100 leading-6 py-5 md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12"> 
                        La idea de club de ajedrez nació en el 2016 con una
                        comisión directiva integrada por {''}
                        <em>
                            Ezequiel Alfero, Jesuan Letizia, Gabriel Izak,
                            Daniel Astaburuaga y Oscar Ponomareff
                        </em>
                        . Hoy es una realidad con sus torneos pensados, rápidos
                        y blitz y tradicionales torneos por equipos, mixturado
                        con una escuela de ajedrez comandada por la {''}
                        <em>
                            maestra internacional y excampeona argentina Marisa
                            Zuriel
                        </em>
                        , quien dicta las clases para nivel intermedio {''}
                        <strong>martes 18hs</strong>.
                    </p>

                    <div className="bg-indigo-100 w-full h-full flex items-center">
                        <p className="text-base text-gray-700  leading-6 py-5 md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12 bg-indigo-100">
                            En un ambiente familiar y sumamente amistoso, se
                            desarrollan los {''}
                            <strong>martes a las 19.30hs</strong> los certámenes
                            de ritmo más lento, mientras que los {''}
                            <strong>sábados a las 16hs</strong>, están a
                            disposición los de ritmo más rápido. Donde jugadores
                            de todas las edades combinan {''}
                            <em>
                                mates, jaques, celadas y todas las actividades
                                relacionadas al deporte ciencia
                            </em>
                            .
                        </p>
                    </div>

                    <img
                        src="https://img.freepik.com/fotos-premium/juego-ajedrez-humo-rojo-azul-detras_582637-2313.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
                        alt="imagen de rey"
                        loading="lazy"
                        className="w-full"
                    />

                    <img
                        src="https://img.freepik.com/vector-premium/rey-ajedrez-blanco-azul-conviertase-lider-concepto-negocio-deporte-aislado-ilustracion-vector-fondo-azul_587448-921.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"
                        alt="imagen de rey"
                        loading="lazy"
                        className="w-full"
                    />
                    <p className="text-base text-gray-700 dark:text-slate-100 leading-6 py-5 md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12">
                        Por otro lado, la escuela de ajedrez a nivel inicial
                        para niños y juveniles, de la mano de {''}
                        <em>Horacio Taddeo</em>, gran referente del ajedrez
                        escolar, se desarrolla los {''}
                        <strong>martes a las 18hs</strong> y a su vez, {''}
                        <em>Zuriel</em> lleva adelante en el mismo horario la
                        escuela para nivel intermedio.
                    </p>

                    <div className="bg-indigo-100 w-full h-full flex items-center">
                        <p className="text-base text-gray-700 leading-6 py-5 md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12">
                            El Club De Ajedrez Zugzwang en el año 2019 se afilio
                            a la {''}
                            <strong>federación metropolitana de ajedrez</strong>
                            para darle un formato legal y serio a su constante
                            desarrollo. Si te gusta el ajedrez, este es el lugar
                            ideal para estudiar, aprender, jugar y divertirse
                            entre amigos.
                        </p>
                    </div>

                    <img
                        src="https://img.freepik.com/fotos-premium/ajedrez-juego-mesa-figuras-color-dorado-sobre-fondo-azul-cerca_114354-1954.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
                        alt="imagen de ajedrez"
                        loading="lazy"
                        className="w-full"
                    />
                </div>
                <br />

                <h2 className="text-lg text-center font-semibold text-gray-800 dark:text-slate-100 p-5">
                    ¡Los esperamos!
                </h2>
                <MatchesInfo
                    data={data}
                />
            </div>
        </Layout>
    );
}




export async function getStaticProps() {
    try {
    const res = await fetch('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/matches');
    const data = await res.json();


    return {
    props: { data: data },
    };
    } catch (error) {
      return { error: error.message };
    }
  }