import Image from 'next/image';
import React from 'react';
import HistoryPic1 from '../../../../public/HistoryPic1.jpg';
import HistoryPic2 from '../../../../public/HistoryPic2.jpg';
import HistoryPic3 from '../../../../public/HistoryPic3.jpg';
import HistoryPic4 from '../../../../public/HistoryPic4.jpg';
import HistoryPic5 from '../../../../public/HistoryPic5.jpg';
import HistoryPic6 from '../../../../public/HistoryPic6.jpg';
import HistoryPic7 from '../../../../public/HistoryPic7.jpg';
import HistoryPic8 from '../../../../public/HistoryPic8.jpg';
import HistoryPic9 from '../../../../public/HistoryPic9.jpg';
import HistoryPic10 from '../../../../public/HistoryPic10.jpg';
import HistoryPic11 from '../../../../public/HistoryPic11.jpg';
import HistoryPic12 from '../../../../public/HistoryPic12.jpg';
import HistoryPic13 from '../../../../public/HistoryPic13.jpg';
import { Navbar } from '../../../components/Navbar/index.jsx';

export default function History() {
  return (
    <>
      <Navbar />
      <div class=''>
        <div class=''>
          <h1 className=''>Algo de nuestra historia: </h1>
          <p>
            En una piecita de la calle chorroarin 632, alrededor de una mesa de
            pino, y a la luz de una lampara a petróleo, se reunió el 11 de
            diciembre de 1928, un grupo de jóvenes del barrio, para dejar
            constituido un club deportivo. Así nació el club social y deportivo
            agronomía central. Durante dos años, el núcleo fundador paseo los
            prestigios de la institución por todas las canchas de futbol
            improvisadas en los baldíos de la ciudad. En 1930 realizaron su
            fusión con el club villa modelo, eligiendo para dirigir los destinos
            de la nueva entidad, a la comisión directiva integrada por los
            señores: Mirabelli, Collazo, Gama de santis, Repetto, Placido,
            Felice, Staricanelli, Turconi, Gentile, Florentino, Bruneli, Borghi
            y Amore.
          </p>
          <div className='md:flex bg-gray-200 md:justify-around'>
            <Image
              src={HistoryPic1}
              alt='PicAlgoHitoria1'
              className='rounded-lg md:max-w-screen-sm '
            />
            <Image
              src={HistoryPic2}
              alt='PicAlgoHitoria1'
              className='rounded-lg md:max-w-screen-sm '
            />
          </div>
          <h1>La casa propia:</h1>
          <p>
            Hasta 1933, el club ocupo una casita en la esquina de las calles
            Chorroarin y Andonaegui. Entonces, otros deportes comenzaron a
            ejercer su seducción en los asociados, y poco a poco la práctica del
            basquetball y del tenis fue desalojando al futbol.
            Contemporáneamente fue tomando impulso la actividad social en la
            institución, afirmándose con el ingreso de las primeras socias. El
            local pronto resulto pequeño y, así fue necesario mudarse a la finca
            de la calle Bucareli 964, primero y Bauness 931 después. La comisión
            directiva que se hizo cargo de los destinos del club en 1930, al
            realizarse la fusión con el club villa modelo. Finalmente llego 1936
            y con la más importante de las innovaciones para el club: la
            adquisición de la casa propia. Las autoridades de la entidad
            compraron un amplio solar en la calle Bauness 958 e hicieron
            construir allí un cuerpo de edificio, que consta de dos salas, donde
            se instalaron las oficinas de secretaria y la biblioteca; de un
            amplio hall en el que funcionaban los juegos de salón, y de una
            habitación larga, donde se hallaban los billares.
          </p>
          <h1>Nuevas instalaciones:</h1>
          <div className='md:flex'>
            <p>
              Sobre la edificación se había dispuesto una amplia terraza que
              utilizaban como buffet en los días calurosos y templados. Sobre
              tres lotes contiguos fueron habilitadas las canchas de basquet,
              tennis, pelota y bochas. Las instalaciones propias se completaban
              con dos amplias pistas de baile, y se proyecta en ese momento una
              cancha cerrada de pelota, que además serviría como salón de baile.
              En ese periodo la comisión directiva estaba integrada por el señor
              Alfonso Rodriguez, a quienes secundaban el secretario Carlos
              Pozzi, el prosecretario Zamora Casas y el tesorero Osvaldo Borghi.
            </p>
            <Image src={HistoryPic3} alt='PicNuevasInst' className='w-96' />
            <Image src={HistoryPic6} alt='PicNuevasInst2' className='w-96' />
          </div>
          <figure>
            <Image src={HistoryPic7} alt='PicEquipo' className='' />
            <figcaption>
              A lo largo de los años en el club se fueron desarrollando
              distintas disciplinas, entre las que se destacan dos en especial
              el básquet donde llego a jugar en la liga de capital y el futbol.
            </figcaption>
          </figure>
          <figure>
            <Image src={HistoryPic8} alt='PicEquipo2' className='' />
            <figcaption>
              A lo largo de muchos años el club se caracterizó por festejar los
              carnavales con distintas murgas de los barrios y sus famosos
              campeonatos de baile y a la vez torneos de papi futbol, donde se
              anotan equipos de las cercanías.
            </figcaption>
          </figure>
          <h1>Inicio del Baby Futbol</h1>
          <div>
            <p>
              Luego en el año 1983 se acercaron al club “el turco” Balouz y Jose
              Rucci, con un proyecto de comenzar el Baby Futbol en el club donde
              jugarían chicos entre 6 años y 13 años, desde ahí se dio comienzo
              a lo que al día de hoy se mantiene de forma ininterrumpida 40
              años.
            </p>
            <Image src={HistoryPic9} alt='PicBabyFutbol' />
          </div>
          <h1>Obras y Tradiciones:</h1>
          <div>
            <figure>
              <Image src={HistoryPic11} alt='PicObras' />
              <figcaption>
                Colecta de un vagon de ropa para los damnificados
                post-inundación de Santa Fe
              </figcaption>
            </figure>
            <figure>
              <Image src={HistoryPic13} alt='PicObras' />
              <figcaption>
                Tradición del partido de fin de año entre solteros y casados.
              </figcaption>
            </figure>
          </div>
          <h1>En la Actualidad:</h1>
          <p>
            Hoy en día el club se ha desarrollado notablemente, donde además de
            las actividades de Futbol, también se practican otras actividades
            como Ajedrez, Touch Ball y Taekwondo, además el club cuenta con un
            quincho con capacidad para 50 personas, un buffet económico y un
            Salón de Fiestas con capacidad para 120 personas, todo esto no se
            podría haber alcanzado sin la constante ayuda de las distintas
            generaciones que pasaron por nuestro club, siempre ad honorem
            buscando el crecimiento constante para llegar a hoy en día a ser lo
            que somos,
          </p>
        </div>
      </div>
    </>
  );
}
