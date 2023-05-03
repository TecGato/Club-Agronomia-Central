import { Layout } from '@/components/Page';
import { MatchesInfo } from '@/components/Page/MatchesInfo';
import insta from '../../../../public/contact-img/insta.svg';
import Image from 'next/image';

export default function FutSal({ data }) {
  return (
    <Layout
      title="Futsal"
      image="https://img.freepik.com/vector-gratis/fondo-futbol-abstracto-degradado_52683-66767.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"
    >
      <div className="m-4 grid md:grid-cols-5">
        <p className="text-base text-gray-700 dark:text-slate-100 leading-6 col-span-3 pl-5 ml-3 ">
          El club participa en la modalidad de futsal desde el año 2014. También
          el club cuenta con futsal para mayores de 30 años y futsal seniors
          para mayores de 36 años, donde participa en la liga Laamba
        </p>

        <div className="col-span-3 p-5">
          <div className="bg-zinc-100 dark:bg-[#353434b4] grid grid-row-4 md:grid-cols-3 md:grid-row-2 m-3">
            <img
              src="https://img.freepik.com/foto-gratis/jugador-futbol-afortunado_1368-3023.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
              alt="futsal"
              loading="lazy"
              className="place-self-center row-span-1 md:row-span-2 md:p-3 md:order-3"
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 p-5 col-span-2 row-span-1 px-5 md:order-1">
              Liga BAFI
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-200 leading-6 md:col-span-2 row-span-2 md:row-span-1 px-5 md:order-2">
              Actualmente el club participa en futsal promocional categorías
              2015/2014/2013, en la <strong>liga BAFI</strong>, donde compite
              con otros clubes de gran renombre en la modalidad, como San
              Lorenzo, Boca Juniors, Kimberley, 17 de agosto, entre otros.
            </p>
          </div>

          <div className="bg-zinc-100 dark:bg-[#353434b4] grid grid-row-4 md:grid-cols-3 md:grid-row-2 m-3 grid-cols-1">
            <img
              src="https://img.freepik.com/foto-gratis/joven-jugador-juego-tiro-competencia_1368-1902.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
              alt="futsal"
              loading="lazy"
              className="place-self-center row-span-1 md:row-span-2 md:p-3"
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 p-5 col-span-2 row-span-1 px-5">
              Liga Laamba
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-200 leading-6 col-span-2 row-span-2 md:row-span-1 px-5">
              Participa desde 7 división hasta 1 división, el club cuenta con
              dos tiras. Los profes que están a cargo son{' '}
              <em>
                Diego Arbelo, Diego Curuchet, Maximiliano Maccarone, Sebastian
                Oroño, Roman Volpe, Gonzalo y Leandro
              </em>
              , todo supervisado por nuestro coordinador deportivo{' '}
              <em>Maximiliano Maccarone</em> con experiencia dirigiendo futsal
              AFA.
            </p>
          </div>

          <div className="bg-zinc-100 dark:bg-[#353434b4] grid grid-row-4 md:grid-cols-3 md:grid-row-2 m-3">
            <img
              src="https://img.freepik.com/foto-gratis/hombre-jugando-al-futbol_1368-3003.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
              alt="futsal"
              loading="lazy"
              className="place-self-center row-span-1 md:row-span-2 md:p-3 md:order-3"
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 p-5 col-span-2 row-span-1 px-5">
              Practica
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-200  leading-6 md:col-span-2 row-span-2 md:row-span-1 px-5 md:order-2">
              Categorías promo los días{' '}
              <strong>jueves de 17.30hs a 19.30hs</strong> en nuestra sede, 4 y
              5 división{' '}
              <strong>de 19.00hs a 22.00hs en el Colegio San Roque</strong>,
              calle plaza 1154, 1 y 3 división{' '}
              <strong>miércoles y jueves de 20hs a 23hs</strong> en nuestra sede
              y 8 a 1 división <strong>martes y viernes de 20hs a 23hs</strong>.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap col-span-3 md:col-span-2">
          <img
            src="https://img.freepik.com/fotos-premium/jugador-futbol-patea-pelota_43569-260.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
            alt="futsal"
            loading="lazy"
            className="md:rounded-full place-self-center px-5 md:p-0"
          />
          <div className="flex flex-row items-center justify-center mt-8 lg:mt-0">
            <a href="https://www.instagram.com/agronomiafutsal" target="_blank">
              <Image
                src={insta}
                alt="Instagram"
                className="w-8 invert dark:invert-0"
              />
            </a>
            <p className="pl-2">Visita nuestro instagram para conocer más!!!</p>
          </div>
        </div>
      </div>
      <MatchesInfo
        data={data}
        classname={
          'w-full h-full flex items-center bg-zinc-100 dark:bg-[#353434b4]'
        }
      />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://club-agronomia-central-production.up.railway.app/api/matches'
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
