import { Layout } from '@/components/Dashboard';
import { useState, useMemo } from 'react';

export default function News({ posts }) {
  const [arr, setArr] = useState(posts);

  const mainNews = useMemo(() => arr[arr.length - 1], [arr]);
  const otherNews = useMemo(() => arr.slice(0, -1), [arr]);

  return (
    <Layout>
      <div className="m-4">
        <button className="bg-[#1b418a] hover:hover:bg-[#10306b] text-white font-bold py-2 px-4 rounded">
          Crear Noticia
        </button>
        <div className="flex flex-wrap justify-center">
          <div className="sm:grid relative sm:grid-cols-2 sm:max-h-72 shadow-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out mb-5 p-5">
            <button
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-xl w-7 h-7 place-content-center"
              onClick={() => {
                console.log('p1');
              }}
            >
              X
            </button>
            <img
              src={mainNews.picture}
              alt={mainNews.title}
              loading="lazy"
              className="col-span-1 p-5 sm:order-2"
            />
            <div className="sm:col-span-1 sm:grid sm:grid-row-2 sm:order-1">
              <h3 className="text-3xl place-self-center text-center font-bold text-gray-700 p-5 sm:row-span-1">
                {mainNews.title}
              </h3>
              <p className="text-base text-gray-700 leading-6 pt-0 px-5 pb-5 mb-3 sm:row-span-1">
                {mainNews.description}
              </p>
            </div>
          </div>

          {otherNews.map((news) => {
            return (
              <div className="relative max-w-xs m-1 shadow-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out p-5">
                <button className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-xl w-7 h-7 align-middle">
                  X
                </button>
                <img
                  src={news.picture}
                  alt={news.title}
                  loading="lazy"
                  className=""
                />
                <h3 className="text-lg text-center font-bold text-gray-700 px-5 pt-5 pb-3">
                  {news.title}
                </h3>
                <p className="text-base text-gray-700 leading-6 px-5 pt-0">
                  {news.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center "></div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/api/posts');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
}
