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
          <div className='md:flex bg-gray-200'>
            <Image src={HistoryPic1} className='rounded-lg max-w-xs max-h-96' />
            <Image src={HistoryPic2} className='rounded-lg max-w-xs max-h-96' />
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
        </div>
      </div>
    </>
  );
}
