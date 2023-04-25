import { Layout, NewsPost } from '@/components/Page';
import { useState, useMemo } from 'react';
import usePagination from '../../components/Page/Pagination';
import Link from "next/link";

export default function Posts({ posts }) {
  const [items, setItems] = useState(posts);
  const { currentItems, pages, currentPage, setCurrentPage } = usePagination(
    items,
    4
  );
  
  const mainNews = useMemo(() => currentItems[currentItems.length - 1], [currentItems]);
  const otherNews = useMemo(() => currentItems.slice(0, -1), [currentItems]);

  return (
    <Layout
      title="Últimas Noticias"
      image="https://img.freepik.com/foto-gratis/gente-tiro-medio-corriendo-juntos_23-2149037629.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"
    >
      <div className='m-4'>
        <div className='flex flex-wrap justify-center'>

          <Link href={`/noticias/${mainNews.id}`} key={mainNews.id}>
            <div className='sm:grid sm:grid-cols-2 sm:max-h-72 shadow-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out mb-5 p-5'>
              <img
                src={mainNews.picture}
                alt={mainNews.title}
                loading='lazy'
                className='col-span-1 p-5 sm:order-2'
              />
              <div className='sm:col-span-1 sm:grid sm:grid-row-2 sm:order-1'>
                <h3 className='text-3xl place-self-center text-center font-bold text-gray-700 p-5 sm:row-span-1'>
                  {mainNews.title}
                </h3>
                <p className='text-base text-gray-700 leading-6 pt-0 px-5 pb-5 mb-3 sm:row-span-1'>
                  {mainNews.description}
                </p>
              </div>
            </div>
          </Link>

          {otherNews.map((news) => {
            return (
              <Link href={`/noticias/${otherNews.id}`} key={otherNews.id}>
                <div className='max-w-xs m-1 shadow-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out p-5'>
                  <img
                    src={news.picture}
                    alt={news.title}
                    loading='lazy'
                    className=''
                  />
                  <h3 className='text-lg text-center font-bold text-gray-700 px-5 pt-5 pb-3'>
                    {news.title}
                  </h3>
                  <p className='text-base text-gray-700 leading-6 px-5 pt-0'>
                    {news.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex space-x-2 justify-center p-5">
        {pages.map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded ${
              currentPage === page + 1
                ? 'bg-blue-700 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setCurrentPage(page + 1)}
          >
            {page + 1}
          </button>
        ))}
      </div>


      <div className="flex flex-col justify-center "></div>

    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
}
