import { Layout } from "@/components/Page";
import React from "react";
import { useRouter } from "next/router";

export default function Post({news}) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout title={'Noticias'} image={'https://img.freepik.com/foto-gratis/joven-corredor-atar-cordones_1421-46.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'}>
            <div className="m-4">
                {/* <img
                    src={news.picture}
                    alt={news.title}
                    loading='lazy'
                    className=''
                />
                <h3 className='text-lg text-center font-bold text-gray-700 p-5'>
                    {news.title}
                </h3>
                <p className='text-base text-gray-700 leading-6 px-5 pt-0'>
                    {news.description}
                </p> */}
            </div>
        </Layout>
    );
}

// export async function getStaticProps({ params }) {
//     const { id } = params;
//     // Aquí iría el código para obtener los detalles de la noticia del servicio web o base de datos
//     const news = { 
//       title: "Noticia " + id,
//       content: "Contenido de la noticia " + id,
//       date: new Date().toISOString(),
//     };
  
//     return {
//       props: {
//         news,
//       },
//     };
//   }
  
//   export async function getStaticPaths() {
//     // Aquí iría el código para obtener todos los IDs de las noticias
//     const newsIds = ["1", "2", "3"];
  
//     const paths = newsIds.map((id) => ({
//       params: { id },
//     }));
  
//     return {
//       paths,
//       fallback: false,
//     };
//   }
