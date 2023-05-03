import { Layout } from '@/components/Page';
import { MatchesInfo } from '@/components/Page/MatchesInfo';
export default function Escuelita({ data }) {
  return (
    <Layout
      title="Escuelita de Fútbol"
      image="https://img.freepik.com/fotos-premium/pelota-futbol-encuentra-agua-hielo-fondo_853115-1530.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
    >
      <div className="m-4 grid md:grid-cols-3">
        <div className="md:rounded-l-lg bg-zinc-100 dark:bg-[#353434b4] col-span-1 grid">
          <p className="text-base text-gray-700 dark:text-slate-100 leading-6 p-7 place-self-center">
            Todos los <strong>martes y viernes de 17.00hs a 18.00hs </strong>,
            llevamos a cabo en nuestra institución “El Jardín De Futbol”, una
            actividad deportiva para{' '}
            <strong>niños y niñas de 3 a 5 años.</strong> Que tiene como
            objetivo, iniciar a los mas pequeños en el mundo del deporte.
          </p>
          <img
            src="https://img.freepik.com/fotos-premium/nino-pateando-pelota-pie-descalzo-mientras-jugaba-futbol-callejero-campo-hierba-verde_34141-412.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
            alt="futbol infantil"
            loading="lazy"
            className="md:rounded-bl-lg hidden md:block place-self-center"
          />
        </div>

        <img
          src="https://img.freepik.com/foto-gratis/nino-jugando-pelota-futbol-afuera-junto-otros-ninos_23-2148631501.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
          alt="futbol infantil"
          loading="lazy"
          className=" col-span-1"
        />
        <div className="md:rounded-r-lg bg-zinc-100 dark:bg-[#353434b4] col-span-1 grid">
          <img
            src="https://img.freepik.com/fotos-premium/bola-patadas-nino_236854-1800.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
            alt="futbol infantil"
            loading="lazy"
            className="md:rounded-tr-lg hidden md:block"
          />
          <p className="text-base text-gray-700 dark:text-slate-100 leading-6 p-7 place-self-center">
            Con la incorporación de esta actividad se brinda a los más chiquitos
            un espacio de juegos y conocimientos iniciadores del futbol, que año
            tras año irán adquiriendo{' '}
            <strong>
              {' '}
              nuevos conocimientos y potenciando nuevas sus habilidades
            </strong>
            .
          </p>
        </div>
      </div>
      <MatchesInfo
        data={data}
        classname={
          'bg-indigo-100 dark:bg-[#2C2C2C]  w-full h-full flex items-center'
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
