import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Banner, Contributions, Donation, Publicity } from '..';
import Quincho from '../../../../public/installations-img/Imagen4.jpg';
import Image from 'next/image';

export function HomePage() {
  const [donate, setDonate] = useState(false);
  const visibleContributions = () => {
    setDonate(!donate);
  };

  useEffect(() => {
    function handleScroll() {
      const video = document.querySelector('video');

      if (video) {
        const videoTop = video.getBoundingClientRect().top;
        const videoHeight = video.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const offset = viewportHeight / 2;

        if (
          videoTop < scrollPosition + viewportHeight - offset &&
          videoTop + videoHeight > scrollPosition + offset
        ) {
          video.classList.remove('blur');
        } else if (scrollPosition === videoTop) {
          video.classList.remove('blur');
        } else {
          video.classList.add('blur');
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="">
      <Banner />
      <div className="contenido w-full pt-80 sm:pt-32 md:pt-40 lg:pt-20 text-center bg-gradient-to-b from-[#397797] to-blue-950">
        <div className="lg:max-w-5xl m-auto">
          <section className="my-10">
            <article className="mb-7">
              <h2 className="text-4xl text-slate-100 font-bold">
                Algunas de Nuestras Disciplinas
              </h2>
              <article className="flex flex-wrap justify-center gap-1 mt-2">
                <div className="w-1/3 aspect-w-1 aspect-h-1 sm:w-[33%] sm:h-32 overflow-hidden rounded-lg relative shadow-lg">
                  <div className="w-full h-full bg-gradient-to-r from-neutral-950 to-transparent absolute flex items-end p-2">
                    <p className="sm:text-3xl text-white font-normal tracking-wide">Ajedrez</p>
                  </div>
                  <img
                    src="https://img.freepik.com/fotos-premium/visualizacion-figurativa-idea-estrategia-empresarial-forma-juego-ajedrez_124507-32323.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
                    alt=""
                  />
                </div>

                <div className="w-1/3 aspect-w-1 aspect-h-1 sm:w-[33%] sm:h-32 overflow-hidden rounded-lg relative shadow-lg">
                  <div className="w-full h-full bg-gradient-to-r from-neutral-950 to-transparent absolute flex items-end p-2">
                    <p className="sm:text-3xl text-white font-normal">
                      Futsal Femenino
                    </p>
                  </div>
                  <img
                    src="https://img.freepik.com/foto-gratis/piernas-cultivo-pateando-pelota-sobre-hierba_23-2147817394.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
                    alt=""
                  />
                </div>

                <div className="w-1/3 aspect-w-1 aspect-h-1 sm:w-[33%] sm:h-32 overflow-hidden rounded-lg relative shadow-lg">
                  <div className="w-full h-full bg-gradient-to-r from-neutral-950 to-transparent absolute flex items-end p-2">
                    <p className="sm:text-3xl text-white font-normal">Taekwondo</p>
                  </div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0646/4097/files/Reglas_del_Taekwondo_2048x2048.jpg?v=1657541457"
                    alt=""
                  />
                </div>
              </article>
            </article>
            <Link
              href="/deportes"
              className="text-neutral-800 bg-[#d3d0d0] rounded-lg py-2 px-3 mt-2 shadow-lg hover:scale-105 transition ease-in-out"
            >
              Ver todas las disciplinas
            </Link>
          </section>
          <section className="my-10">
            <div className="flex">
              <article className="w-1/2 flex flex-col justify-center items-start mx-4">
                <h2 className="text-4xl text-left text-slate-100 font-bold mb-3">
                  Pasa un buen rato en nuestro quincho
                </h2>
                <p className="text-slate-100 text-left">
                  Alquila en el horario de 11hs a 17hs o 19hs a 02hs
                </p>
                <p className="text-slate-100 text-left">
                  Para asados, reuniones familiares y mucho mas!
                </p>
                <Link
                  href="/club/quincho"
                  className="text-neutral-800 bg-[#d3d0d0] rounded-lg py-2 px-3 mt-2 shadow-lg hover:scale-105 transition ease-in-out"
                >
                  Solicitar Reserva
                </Link>
              </article>
              <article className="w-1/2 rounded-lg shadow-lg overflow-hidden">
                <Image src={Quincho} alt="Imagen del quincho" />
              </article>
            </div>
          </section>
          <br className="lg:my-5 lg:py-5" />
          <section className='flex gap-1'>
            <article className='m-2'>
              <h2 className="text-4xl text-center text-slate-100 font-bold mb-3">Nuestra Misión</h2>
              <p className="text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim quod quasi consequatur, quam perferendis, commodi consequuntur perspiciatis adipisci totam nesciunt ex optio pariatur sed ratione voluptatibus debitis eaque dignissimos!</p>
            </article>
            <article className='m-2'>
              <h2 className="text-4xl text-center text-slate-100 font-bold mb-3">Nuestra Visión</h2>
              <p className="text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim quod quasi consequatur, quam perferendis, commodi consequuntur perspiciatis adipisci totam nesciunt ex optio pariatur sed ratione voluptatibus debitis eaque dignissimos!</p>
            </article>
          </section>
          <br className="lg:my-5 lg:py-5" />
        <hr className="lg:mt-5 lg:pt-5 border-gray-600" />
        </div>
        <Donation visibleContributions={visibleContributions} />
        {donate ? (
          <Contributions visibleContributions={visibleContributions} />
        ) : null}
        <br className="lg:my-5 lg:py-5" />
        <hr className="lg:mt-5 lg:pt-5 border-gray-500" />
        <Publicity />
      </div>
    </div>
  );
}
