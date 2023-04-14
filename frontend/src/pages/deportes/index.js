import React from 'react';
import { Layout } from '@/components';

export default function Deportes() {
    return (
        <Layout>
            <div className='m-4 flex flex-wrap justify-center relative'>
                <img src='https://img.freepik.com/fotos-premium/retrato-dinamico-joven-deportista-entrenando-corriendo-aislada-sobre-fondo-morado-neon-luces-mixtas_155003-45926.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph' alt='deporte' loading='lazy' className='w-full z-0' />

                <div className='overflow-hidden shadow-lg m-1 max-w-xs sm:-translate-y-48 sm:z-10 bg-white'>
                    <h3 className='text-lg font-bold text-gray-800 px-5 pt-5 pb-3'>Ajedrez</h3>
                    <div className='border-2 border-blue-600 mb-8 mx-5 w-14'></div>
                    <p className='text-base text-gray-700 leading-6 px-5 pt-0'>Es un juego de mesa en el que dos personas mueven las piezas en un tablero para tratar de capturar al rey del otro jugador.</p>
                    <img src='https://img.freepik.com/fotos-premium/visualizacion-figurativa-idea-estrategia-empresarial-forma-juego-ajedrez_124507-32323.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph' alt='ajedrez' loading='lazy' className='p-4' />
                </div>

                <div className='overflow-hidden shadow-lg m-1 max-w-xs sm:-translate-y-48 sm:z-10 bg-white'>
                    <h3 className='text-lg font-bold text-gray-800 px-5 pt-5 pb-3'>Centro de Entrenamiento</h3>
                    <div className='border-2 border-blue-600 mb-8 mx-5 w-14'></div>
                    <p className='text-base text-gray-700 leading-6 px-5 pt-0'>Aprende cosas nuevas y practica habilidades para mejorar tu salud física y bienestar emocional.</p>
                    <img src='https://img.freepik.com/fotos-premium/pareja-muscular-haciendo-tabla-ejercicio-juntos_13339-151107.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph' alt='entrenamiento' loading='lazy' className='p-4' />
                </div>

                <div className='overflow-hidden shadow-lg m-1 max-w-xs sm:-translate-y-48 sm:z-10 bg-white'>
                    <h3 className='text-lg font-bold text-gray-800 px-5 pt-5 pb-3'>Baby Futbol</h3>
                    <div className='border-2 border-blue-600 mb-8 mx-5 w-14'></div>
                    <p className='text-base text-gray-700 leading-6 px-5 pt-0'>Deporte donde los niños juegan al fútbol en equipo con reglas y tamaños de cancha adecuados para su edad</p>
                    <img src='https://img.freepik.com/foto-gratis/ninos-tiro-completo-jugando-al-futbol_23-2149270951.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=ais' alt='baby futbol' loading='lazy' className='p-4' />
                </div>

                <div className='overflow-hidden shadow-lg m-1 max-w-xs -translate-y-20 z-10 bg-white'>
                    <h3 className='text-lg font-bold text-gray-800 px-5 pt-5 pb-3'>Futsal</h3>
                    <div className='border-2 border-blue-600 mb-8 mx-5 w-14'></div>
                    <p className='text-base text-gray-700 leading-6 px-5 pt-0'>Deporte parecido al fútbol, pero se juega en una cancha más pequeña y con menos jugadores, lo que hace el juego sea más rápido y emocionante.</p>
                    <img src='https://img.freepik.com/foto-gratis/jugador-futbol-o-futbol-masculino-caucasico-joven-pateando-pelota-gol-luz-mixta-pared-oscura-concepto-pasatiempo-deportivo-profesional-estilo-vida-saludable_155003-38568.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph' alt='futsal' loading='lazy' className='p-4' />
                </div>

                <div className='overflow-hidden shadow-lg m-1 max-w-xs sm:-translate-y-20 sm:z-10 bg-white'>
                    <h3 className='text-lg font-bold text-gray-800 px-5 pt-5 pb-3'>Futsal Femenino</h3>
                    <div className='border-2 border-blue-600 mb-8 mx-5 w-14'></div>
                    <p className='text-base text-gray-700 leading-6 px-5 pt-0'>Deporte muy parecido al fútbol en el que las mujeres juegan en un espacio más pequeño que una cancha normal y con menos jugadoras.</p>
                    <img src='https://img.freepik.com/foto-gratis/mujer-ropa-deportiva-jugando-al-futbol_23-2148298870.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais' alt='futsal femenino' loading='lazy' className='p-4' />
                </div>

                <div className='overflow-hidden shadow-lg m-1 max-w-xs sm:-translate-y-20 sm:z-10 bg-white'>
                    <h3 className='text-lg font-bold text-gray-800 px-5 pt-5 pb-3'>Taekwondo</h3>
                    <div className='border-2 border-blue-600 mb-8 mx-5 w-14'></div>
                    <p className='text-base text-gray-700 leading-6 px-5 pt-0'>Deporte de combate en el que se usan patadas y golpes con las manos para defenderse y ganar puntos en un torneo.</p>
                    <img src='https://img.freepik.com/foto-gratis/foto-estudio-completa-dos-mujeres-atletas-taekwondo-entrenando-aisladas-sobre-fondo-negro_155003-45455.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph' alt='taekwondo' loading='lazy' className='p-4' />
                </div>

            </div>
        </Layout>
    )
}