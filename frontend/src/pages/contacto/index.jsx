import { Layout } from '@/components/Page';
import Image from 'next/image';
import location from '../../../public/contact-img/location.svg';
import tfno from '../../../public/contact-img/tfno.svg';
import mail from '../../../public/contact-img/mail.svg';
import insta from '../../../public/contact-img/insta.svg';
import face from '../../../public/contact-img/face.svg';
import ws from '../../../public/contact-img/ws.svg';

export default function Contact() {
  return (
    <Layout 
    title="Contactanos"
    image="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    >
      <div className="  m-8 text-center p-8 lg:p-24 bg-[#1a2957e5] flex flex-col items-center lg:mx-0 lg:flex-row shadow-lg  text-white">
        <div className="w-[50%]  mb-4 lg:ml-8 flex flex-col gap-8">
          <div className="flex gap-2 ">
            <Image src={location} className="w-7" />
            <p>Bauness 958 CABA</p>
          </div>
          <div className="flex gap-2 ">
            <Image src={tfno} className="w-6" />
            <p>+514567894</p>
          </div>
          <div className="flex gap-2">
            <Image src={mail} className="w-6" />
            <p>agronomiacentralok@gmail.com</p>
          </div>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/agronomiacentral.futbol/?hl=es">
            <Image src={insta} className="w-7" />
            </a>
            <a href="https://www.facebook.com/clubagronomiacentral">
            <Image src={face} className="w-7" />
            </a>
            <a href=" https://wa.me/5491156931160">
            <Image src={ws} className="w-7" />
            </a>
          </div>
        </div>
        <div className="flex w-[50%] flex-col gap-4 ">
          
          <input
            type="text"
            className="bg-[#191c5e92]  p-2"
            placeholder="Nombre"
          />
          <input
            type="text"
            className="bg-[#191c5e92] p-2"
            placeholder="Email"
          />
          <textarea name="message" className='bg-[#191c5e92] p-2' placeholder='Mensaje' cols="20" rows="5"></textarea>
          <button className=" border-solid border-2 border-blue-700 py-3 px-10 text-white">
            Enviar
          </button>
        </div>
        <div></div>
      </div>
    </Layout>
  );
}
