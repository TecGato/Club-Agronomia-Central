import Image from 'next/image';

import { Layout } from '@/components/Page';
import { useHistoryLine } from '@/hooks';

import HistoryPic1 from '../../../../public/history-img/HistoryPic1.jpg';
import HistoryPic2 from '../../../../public/history-img/HistoryPic2.jpg';
import HistoryPic3 from '../../../../public/history-img/HistoryPic3.jpg';
import HistoryPic6 from '../../../../public/history-img/HistoryPic6.jpg';
import HistoryPic7 from '../../../../public/history-img/HistoryPic7.jpg';
import HistoryPic8 from '../../../../public/history-img/HistoryPic8.jpg';
import HistoryPic9 from '../../../../public/history-img/HistoryPic9.jpg';
import HistoryPic11 from '../../../../public/history-img/HistoryPic11.jpg';
import HistoryPic13 from '../../../../public/history-img/HistoryPic13.jpg';

export default function History() {
    const { inform, clickedButton, handleClick, handlerNext, handlerPrev } =
        useHistoryLine();
    return (
        <Layout title="Nuestra Historia" image={HistoryPic7}>
            <>
                <div className="mt-8">
                    {inform[clickedButton] ? (
                        <p className="md:hidden ml-20 mr-20 text-center bg-cyan-500 animate-[openMobileMenu_0.5s_ease] ">
                            {inform[clickedButton]}
                        </p>
                    ) : null}
                    <ul className="grid grid-cols-9 gap-4 justify-center flex-nowrap">
                        <button className="text-5xl" onClick={handlerPrev}>
                            {'<'}
                        </button>
                        {/* ---------------------------------------Boton 1------------------------------------------------ */}
                        <div className="flex flex-col items-center place-self-center">
                            <abbr title="Inicios de nuestra Historia">
                                <button
                                    onClick={handleClick}
                                    value="1"
                                    className={
                                        clickedButton !== '1'
                                            ? 'bg-black w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                            : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                    }
                                ></button>
                            </abbr>
                            {clickedButton === '1' ? (
                                <p className=" hidden md:flex text-center bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                                    Inicio de nuestra Historia
                                </p>
                            ) : null}
                        </div>
                        {/*----------------------------------------- Boton 2--------------------------------------------- */}
                        <div className="flex flex-col items-center place-self-center">
                            <abbr title="La casa propia">
                                <button
                                    onClick={handleClick}
                                    value="2"
                                    className={
                                        clickedButton !== '2'
                                            ? 'bg-black w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                            : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                    }
                                ></button>
                            </abbr>
                            {clickedButton === '2' ? (
                                <p className="hidden md:flex text-center bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                                    La Casa propia
                                </p>
                            ) : null}
                        </div>
                        {/* ---------------------------------------- BOTON 3 -------------------------------------------- */}
                        <div className="flex flex-col items-center place-self-center">
                            <abbr title="Nuevas Instalaciones">
                                <button
                                    onClick={handleClick}
                                    value="3"
                                    className={
                                        clickedButton !== '3'
                                            ? 'bg-black w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                            : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                    }
                                ></button>
                            </abbr>
                            {clickedButton === '3' ? (
                                <p className="hidden md:flex text-center bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                                    Nuevas Instalaciones
                                </p>
                            ) : null}
                        </div>
                        {/* ---------------------------------------- BOTON 4 -------------------------------------------- */}
                        <div className="flex flex-col items-center place-self-center">
                            <abbr title="A travez de los años">
                                <button
                                    onClick={handleClick}
                                    value="4"
                                    className={
                                        clickedButton !== '4'
                                            ? 'bg-black w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                            : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                    }
                                ></button>
                            </abbr>
                            {clickedButton === '4' ? (
                                <p className="hidden md:flex text-center bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                                    A travez de los años
                                </p>
                            ) : null}
                        </div>
                        {/* ---------------------------------------- BOTON 5 -------------------------------------------- */}
                        <div className="flex flex-col items-center place-self-center">
                            <abbr title="Inicio del Baby futbol">
                                <button
                                    onClick={handleClick}
                                    value="5"
                                    className={
                                        clickedButton !== '5'
                                            ? 'bg-black w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                            : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                    }
                                ></button>
                            </abbr>
                            {clickedButton === '5' ? (
                                <p className="hidden md:flex text-center bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                                    Inicio del Baby futbol
                                </p>
                            ) : null}
                        </div>
                        {/* ---------------------------------------- BOTON 6 -------------------------------------------- */}
                        <div className="flex flex-col items-center place-self-center">
                            <abbr title="Obras y Tradiciones">
                                <button
                                    onClick={handleClick}
                                    value="6"
                                    className={
                                        clickedButton !== '6'
                                            ? 'bg-black w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                            : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                    }
                                ></button>
                            </abbr>
                            {clickedButton === '6' ? (
                                <p className="hidden md:flex text-center bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                                    Obras y Tradiciones
                                </p>
                            ) : null}
                        </div>
                        {/* ---------------------------------------- BOTON 7 -------------------------------------------- */}
                        <div className="flex flex-col items-center place-self-center">
                            <abbr title="En la Actualidad">
                                <button
                                    onClick={handleClick}
                                    value="7"
                                    className={
                                        clickedButton !== '7'
                                            ? 'bg-black w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                            : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                                    }
                                ></button>
                            </abbr>
                            {clickedButton === '7' ? (
                                <p className="hidden md:flex text-center bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                                    En la Actualidad
                                </p>
                            ) : null}
                        </div>
                        <button className="text-5xl" onClick={handlerNext}>
                            {'>'}
                        </button>
                    </ul>
                </div>
                {/* -------------------------------------------INFO A RENDERIZAR--------------------------------------- */}
                <div className="">
                    <div className="flex flex-col">
                        {/* <h1 className='text-lg underline mt-2'>Algo de Nuestra Historia: </h1> */}
                        {clickedButton === '1' && (
                            <div>
                                <div className="md:flex">
                                    <p className="text-justify m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                                        En una piecita de la calle chorroarin
                                        632, alrededor de una mesa de pino, y a
                                        la luz de una lampara a petróleo, se
                                        reunió el 11 de diciembre de 1928, un
                                        grupo de jóvenes del barrio, para dejar
                                        constituido un club deportivo.
                                    </p>
                                    <p className="text-justify m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                                        Así nació el club social y deportivo
                                        agronomía central. Durante dos años, el
                                        núcleo fundador paseo los prestigios de
                                        la institución por todas las canchas de
                                        futbol improvisadas en los baldíos de la
                                        ciudad.
                                    </p>
                                    <p className="text-justify m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                                        En 1930 realizaron su fusión con el club
                                        villa modelo, eligiendo para dirigir los
                                        destinos de la nueva entidad, a la
                                        comisión directiva integrada por los
                                        señores: Mirabelli, Collazo, Gama de
                                        santis, Repetto, Placido, Felice,
                                        Staricanelli, Turconi, Gentile,
                                        Florentino, Bruneli, Borghi y Amore.
                                    </p>
                                </div>
                                <div className="md:grid md:grid-cols-2 gap-6 items-center ">
                                    <Image
                                        src={HistoryPic1}
                                        alt="PicAlgoHitoria1"
                                        className=""
                                    />
                                    <Image
                                        src={HistoryPic2}
                                        alt="PicAlgoHitoria1"
                                        className=""
                                    />
                                </div>
                            </div>
                        )}
                        {/* <h1 className='text-lg underline mt-2'>La casa propia:</h1> */}
                        {clickedButton === '2' && (
                            <div className="">
                                <p className="text-justify m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                                    Hasta 1933, el club ocupo una casita en la
                                    esquina de las calles Chorroarin y
                                    Andonaegui. Entonces, otros deportes
                                    comenzaron a ejercer su seducción en los
                                    asociados, y poco a poco la práctica del
                                    basquetball y del tenis fue desalojando al
                                    futbol. Contemporáneamente fue tomando
                                    impulso la actividad social en la
                                    institución, afirmándose con el ingreso de
                                    las primeras socias. El local pronto resulto
                                    pequeño y, así fue necesario mudarse a la
                                    finca de la calle Bucareli 964, primero y
                                    Bauness 931 después. La comisión directiva
                                    que se hizo cargo de los destinos del club
                                    en 1930, al realizarse la fusión con el club
                                    villa modelo. Finalmente llego 1936 y con la
                                    más importante de las innovaciones para el
                                    club: la adquisición de la casa propia. Las
                                    autoridades de la entidad compraron un
                                    amplio solar en la calle Bauness 958 e
                                    hicieron construir allí un cuerpo de
                                    edificio, que consta de dos salas, donde se
                                    instalaron las oficinas de secretaria y la
                                    biblioteca; de un amplio hall en el que
                                    funcionaban los juegos de salón, y de una
                                    habitación larga, donde se hallaban los
                                    billares.
                                </p>
                            </div>
                        )}
                        {/* <h1 className='text-lg underline'>Nuevas instalaciones:</h1> */}
                        {clickedButton === '3' && (
                            <div className="md:grid md:grid-cols-3 gap-6 justify-items-center items-center m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                                <Image
                                    src={HistoryPic3}
                                    alt="PicNuevasInst"
                                    className=""
                                />
                                <p className="text-justify">
                                    Sobre la edificación se había dispuesto una
                                    amplia terraza que utilizaban como buffet en
                                    los días calurosos y templados. Sobre tres
                                    lotes contiguos fueron habilitadas las
                                    canchas de basquet, tennis, pelota y bochas.
                                    Las instalaciones propias se completaban con
                                    dos amplias pistas de baile, y se proyecta
                                    en ese momento una cancha cerrada de pelota,
                                    que además serviría como salón de baile. En
                                    ese periodo la comisión directiva estaba
                                    integrada por el señor Alfonso Rodriguez, a
                                    quienes secundaban el secretario Carlos
                                    Pozzi, el prosecretario Zamora Casas y el
                                    tesorero Osvaldo Borghi.
                                </p>

                                <Image
                                    src={HistoryPic6}
                                    alt="PicNuevasInst2"
                                    className=""
                                />
                            </div>
                        )}
                        {clickedButton === '4' && (
                            <div className="md:grid grid-cols-2 gap-6 justify-items-center items-center m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                                <figure>
                                    <Image
                                        src={HistoryPic7}
                                        alt="PicEquipo"
                                        className=""
                                    />
                                    <figcaption className="text-justify">
                                        A lo largo de los años en el club se
                                        fueron desarrollando distintas
                                        disciplinas, entre las que se destacan
                                        dos en especial el básquet donde llego a
                                        jugar en la liga de capital y el futbol.
                                    </figcaption>
                                </figure>
                                <figure>
                                    <Image
                                        src={HistoryPic8}
                                        alt="PicEquipo2"
                                        className=""
                                    />
                                    <figcaption className="text-justify">
                                        Tambien club se caracterizó por festejar
                                        los carnavales con distintas murgas de
                                        los barrios y sus famosos campeonatos de
                                        baile y a la vez torneos de papi futbol,
                                        donde se anotan equipos de las
                                        cercanías.
                                    </figcaption>
                                </figure>
                            </div>
                        )}
                        {/* <h1 className='text-lg underline'>Inicio del Baby Futbol</h1> */}
                        {clickedButton === '5' && (
                            <div className="flex flex-col items-center gap-6 m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                                <p>
                                    Luego en el año 1983 se acercaron al club
                                    “el turco” Balouz y Jose Rucci, con un
                                    proyecto de comenzar el Baby Futbol en el
                                    club donde jugarían chicos entre 6 años y 13
                                    años, desde ahí se dio comienzo a lo que al
                                    día de hoy se mantiene de forma
                                    ininterrumpida 40 años.
                                </p>
                                <Image src={HistoryPic9} alt="PicBabyFutbol" />
                            </div>
                        )}
                        {/* <h1 className='text-lg underline'>Obras y Tradiciones:</h1> */}
                        {clickedButton === '6' && (
                            <div className="md:grid grid-cols-2 gap-6 justify-items-center items-center m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                                <figure>
                                    <Image src={HistoryPic11} alt="PicObras" />
                                    <figcaption className="text-justify">
                                        Colecta de un vagon de ropa para los
                                        damnificados post-inundación de Santa Fe
                                    </figcaption>
                                </figure>
                                <figure>
                                    <Image src={HistoryPic13} alt="PicObras" />
                                    <figcaption className="text-justify">
                                        Tradición del partido de fin de año
                                        entre solteros y casados.
                                    </figcaption>
                                </figure>
                            </div>
                        )}
                        {/* <h1 className='text-lg underline'>En la Actualidad:</h1> */}
                        {clickedButton === '7' && (
                            <p className="text-justify m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                                Hoy en día el club se ha desarrollado
                                notablemente, donde además de las actividades de
                                Futbol, también se practican otras actividades
                                como Ajedrez, Touch Ball y Taekwondo, además el
                                club cuenta con un quincho con capacidad para 50
                                personas, un buffet económico y un Salón de
                                Fiestas con capacidad para 120 personas, todo
                                esto no se podría haber alcanzado sin la
                                constante ayuda de las distintas generaciones
                                que pasaron por nuestro club, siempre ad honorem
                                buscando el crecimiento constante para llegar a
                                hoy en día a ser lo que somos.
                            </p>
                        )}
                    </div>
                </div>
            </>
        </Layout>
    );
}
