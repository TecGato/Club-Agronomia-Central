import { Layout } from '@/components/Page';
import Image from 'next/image';
import insta from '../../../../public/contact-img/insta.svg';
import { MatchesInfo } from '@/components/Page/MatchesInfo';
export default function FutFem({ data }) {
  return (
    <Layout
      title="Futsal Femenino"
      image="https://img.freepik.com/foto-gratis/piernas-cultivo-pateando-pelota-sobre-hierba_23-2147817394.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
    >
      <div className="m-4">
        <div className="grid grid-cols-1 md:grid-row-2 md:grid-cols-3 place-items-center">
          <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 text-center p-5 row-span-1 col-span-3">
              En el Club
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-300  leading-6 py-0 md:text-right row-span-1 col-span-3">
              Se practica en nuestro club desde el año 2016
            </p>
            <img
              src="https://cdn.icon-icons.com/icons2/1036/PNG/96/Soccer_Ball_icon-icons.com_76265.png"
              alt="corona"
              className="w-8 h-8 row-span-2 col-span-1 place-self-center dark:invert invert-0"
            />
          </div>

          <img
            src="https://img.freepik.com/foto-gratis/mujer-atletica-pateando-futbol_23-2148298864.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
            alt="futsal femenino"
            loading="lazy"
            className="shadow-xl row-span-2"
          />

          <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
            <img
              src="https://cdn.icon-icons.com/icons2/390/PNG/96/queen-crown_38957.png"
              alt="corona"
              className="w-8 h-8 row-span-2 col-span-1 place-self-center dark:invert invert-0"
            />
            <h3 className="text-lg font-bold dark:text-slate-100 text-gray-800 text-center p-5 row-span-1 col-span-3">
              Campeonas
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-300  leading-6 py-0 row-span-1 col-span-3">
              En varias oportunidades, en la actualidad
            </p>
          </div>

          <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
            <img
              src="https://cdn.icon-icons.com/icons2/3069/PNG/96/office_trophy_winner_competition_reward_icon_190988.png"
              alt="liga"
              className="w-8 h-8 row-span-2 col-span-1 place-self-center md:order-3 dark:invert invert-0"
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 text-center p-5 row-span-1 col-span-3 md:order-1">
              Liga Laamba
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-300  leading-6 py-0 md:text-right row-span-1 col-span-3 md:order-2">
              Contamos con 1 division, unica, 3 division y 4 division
              compitiendo en esta liga
            </p>
          </div>

          <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
            <img
              src="https://cdn.icon-icons.com/icons2/67/PNG/96/soccersports_futbo_13301.png"
              alt="practica"
              className="w-8 h-8 row-span-2 col-span-1 place-self-center dark:invert "
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 text-center p-5 row-span-1 col-span-3">
              Practica
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-300  leading-6 py-0 row-span-1 col-span-3">
              El profe a cargo es <em>Fernando</em> y las practicas: {''}
              <strong>lunes y miercoles de 20.00hs a 22.00hs</strong>
              {''} todas las categorias.
            </p>
          </div>
        </div>
        <a
          href="https://www.instagram.com/agronomiacentral.futsalfem"
          target="_blank"
        >
          <div className="flex flex-row items-center justify-center mt-8">
            <Image
              src={insta}
              alt="Instagram"
              className="w-8 invert dark:invert-0"
            />
            <p className="pl-2">Visita nuestro instagram para conocer más!!!</p>
          </div>
        </a>
      </div>
      <MatchesInfo
        data={data}
        classname={
          'w-full h-full flex items-center bg-zinc-200 dark:bg-[#353434b4]'
        }
      />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      'http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/matches'
    );
    const data = await res.json();

    return {
      props: { data: data },
      revalidate: 3600,
    };
  } catch (error) {
    return { error: error.message };
  }
}
