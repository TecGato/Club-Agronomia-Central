import { Layout } from '@/components/Page';

export default function Arqueros() {
    return (
        <Layout 
            title='Entrenamiento de Arqueros'
            image='https://img.freepik.com/foto-gratis/jugadores-futbol-accion-estadio-profesional_654080-1752.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph'
        >
            <div  className="m-4 grid md:grid-cols-5">
                <p  className="text-base text-gray-700 leading-6 p-5 max-w-xl col-span-3">
                    Desde inicios del año pasado el club agrego el entrenamiento {''}
                    exclusivo de arqueros, donde se incentiva el desarrollo físico y {''}
                    mental mediante ejercicios de coordinación, {''}
                    <strong>no tiene límites de edad.</strong>
                </p>
                <img 
                    src='https://img.freepik.com/vector-premium/estadio-deportivo-ilustracion-porteria-futbol_53562-5609.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph' 
                    alt='Arqueria de fútbol'
                    loading='lazy'
                    className='col-span-3 md:rounded-l-lg h-96'
                />
                <div class="col-span-2 max-h-96 p-5 bg-[#031936] md:rounded-r-lg flex items-center justify-center h-screen">
                <p className="text-base text-white leading-6 ">
                    Se practican los días {''}
                    <strong>
                        miércoles de 19.00hs hasta las 20.00hs
                    </strong> {''}
                    para chicos entre 6 y 13 años, y {''}
                    <strong>
                        de 20.00hs a 21.00hs
                    </strong>  {''}
                    para mayores de 13 años sin límite de edad, el mismo es proporcionado por el profe {''}
                    <em>Maxi</em>.
                </p>
            </div>
                </div>

        </Layout>
    )
}