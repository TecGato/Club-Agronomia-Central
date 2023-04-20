import { Layout } from '@/components/Page';

export default function FutFem() {
    return (
        <Layout
            title="Futsal Femenino"
            image="https://img.freepik.com/foto-gratis/piernas-cultivo-pateando-pelota-sobre-hierba_23-2147817394.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
        >
            <div className="m-4">
                <div className="grid grid-cols-1 md:grid-row-2 md:grid-cols-3 place-items-center">
                    <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
                        <h3 className="text-lg font-bold text-gray-800 text-center p-5 row-span-1 col-span-3">
                            En el Club
                        </h3>
                        <p className="text-base text-gray-700 leading-6 py-0 md:text-right row-span-1 col-span-3">
                            Se practica en nuestro club desde el año 2016
                        </p>
                        <img
                            src="https://cdn.icon-icons.com/icons2/1036/PNG/96/Soccer_Ball_icon-icons.com_76265.png"
                            alt="corona"
                            className="w-8 h-8 row-span-2 col-span-1 place-self-center"
                        />
                    </div>

                    <img
                        src="https://img.freepik.com/foto-gratis/mujer-adulta-forma-jugando-futbol_23-2148298910.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
                        alt="futsal femenino"
                        loading="lazy"
                        className="shadow-xl row-span-2 rounded-md"
                    />

                    <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
                        <img
                            src="https://cdn.icon-icons.com/icons2/390/PNG/96/queen-crown_38957.png"
                            alt="corona"
                            className="w-8 h-8 row-span-2 col-span-1 place-self-center"
                        />
                        <h3 className="text-lg font-bold text-gray-800 text-center p-5 row-span-1 col-span-3">
                            Campeonas
                        </h3>
                        <p className="text-base text-gray-700 leading-6 py-0 row-span-1 col-span-3">
                            En varias oportunidades, en la actualidad
                        </p>
                    </div>

                    <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
                        <img
                            src="https://cdn.icon-icons.com/icons2/3069/PNG/96/office_trophy_winner_competition_reward_icon_190988.png"
                            alt="liga"
                            className="w-8 h-8 row-span-2 col-span-1 place-self-center md:order-3"
                        />
                        <h3 className="text-lg font-bold text-gray-800 text-center p-5 row-span-1 col-span-3 md:order-1">
                            Liga Laamba
                        </h3>
                        <p className="text-base text-gray-700 leading-6 py-0 md:text-right row-span-1 col-span-3 md:order-2">
                            Contamos con 1 division, unica, 3 division y 4
                            division compitiendo en esta liga
                        </p>
                    </div>

                    <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
                        <img
                            src="https://cdn.icon-icons.com/icons2/67/PNG/96/soccersports_futbo_13301.png"
                            alt="practica"
                            className="w-8 h-8 row-span-2 col-span-1 place-self-center"
                        />
                        <h3 className="text-lg font-bold text-gray-800 text-center p-5 row-span-1 col-span-3">
                            Practica
                        </h3>
                        <p className="text-base text-gray-700 leading-6 py-0 row-span-1 col-span-3">
                            El profe a cargo es <em>Fernando</em> y las
                            practicas: {''}
                            <strong>
                                lunes y miercoles de 20.00hs a 22.00hs
                            </strong>
                            todas las categorias.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
