import { Layout, NewsPost } from '@/components/Page';
import FormNews from '@/components/Page/FormNews/FormNews';
import { useState, useMemo } from 'react';

export default function Posts() {
  const [showForm, setShowForm] = useState(false);
  const [arr, setArr] = useState([
    {
      title: 'Hay muchos nuevos deportes en nuestro club',
      image:
        'https://img.freepik.com/fotos-premium/corredor-hombre-empieza-correr-carretera_34152-1432.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget malesuada nibh. Nulla nec quam vitae ligula vestibulum pharetra.',
    },
    {
      title: 'Te invitamos al próximo torneo',
      image:
        'https://img.freepik.com/fotos-premium/mujer-apta-que-estira-su-pierna-calentar-gimnasio_44344-606.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget malesuada nibh. Nulla nec quam vitae ligula vestibulum pharetra.',
    },
    {
      title: 'Acompáñanos en nuestra siguiente actividad',
      image:
        'https://img.freepik.com/foto-gratis/mujer-embarazada-tiro-completo-haciendo-deporte_23-2150310589.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget malesuada nibh. Nulla nec quam vitae ligula vestibulum pharetra.',
    },
    {
      title: 'Taekwondo: Nuevo deporte en el club!',
      image:
        'https://img.freepik.com/foto-gratis/gente-tiro-medio-corriendo-juntos_23-2149037629.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget malesuada nibh. Nulla nec quam vitae ligula vestibulum pharetra.',
    },
  ]);

  const AddPost = ({ title, image, post }) => {
    setArr([...arr, { title, image, post }]);
  };

  const mainNews = useMemo(() => arr[arr.length - 1], [arr]);
  const otherNews = useMemo(() => arr.slice(0, -1), [arr]);

  const [post, setPost] = useState({
    title: '',
    image: '',
    post: '',
  });

  const handlerChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    AddPost(post);
    setShowForm(false);
    setPost({
      title: '',
      image: '',
      post: '',
    });
  };

  return (
    <Layout
      title='Últimas Noticias'
      image='https://img.freepik.com/foto-gratis/gente-tiro-medio-corriendo-juntos_23-2149037629.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
    >
      <div className='m-4'>
        <div className='flex flex-wrap justify-center'>
          <div className='sm:grid sm:grid-cols-2 sm:max-h-72 shadow-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out mb-5 p-5'>
            <img
              src={mainNews.image}
              alt={mainNews.title}
              loading='lazy'
              className='col-span-1 p-5 sm:order-2'
            />
            <div className='sm:col-span-1 sm:grid sm:grid-row-2 sm:order-1'>
              <h3 className='text-3xl place-self-center text-center font-bold text-gray-700 p-5 sm:row-span-1'>
                {mainNews.title}
              </h3>
              <p className='text-base text-gray-700 leading-6 pt-0 px-5 pb-5 mb-3 sm:row-span-1'>
                {mainNews.post}
              </p>
            </div>
          </div>

          {otherNews.map((news) => {
            return (
              <div className='max-w-xs m-1 shadow-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out p-5'>
                <img
                  src={news.image}
                  alt={news.title}
                  loading='lazy'
                  className=''
                />
                <h3 className='text-lg text-center font-bold text-gray-700 px-5 pt-5 pb-3'>
                  {news.title}
                </h3>
                <p className='text-base text-gray-700 leading-6 px-5 pt-0'>
                  {news.post}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-col justify-center '>
        <button
          onClick={() => setShowForm(!showForm)}
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/4 self-center '
        >
          Button
        </button>
        {showForm && (
          <div>
            <form className='flex flex-col'>
              <label>Titulo:</label>
              <input
                name='title'
                type='text'
                className='border-2'
                onChange={handlerChange}
                value={post.title}
              />
              <label>Imagen:</label>
              <input
                name='image'
                type='text'
                className='border-2'
                onChange={handlerChange}
                value={post.image}
              />
              <label>Post:</label>
              <input
                name='post'
                type='text'
                className='border-2'
                onChange={handlerChange}
                value={post.post}
              />
              <button
                type='submit'
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/8 self-center'
                onClick={handlerSubmit}
              >
                Button
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
}
