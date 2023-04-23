import { Layout } from '@/components/Dashboard';
import { useState, useMemo } from 'react';
import { FormNews } from '../../../components/Dashboard/Forms/NewsForm';
import { FormModifyNews } from '../../../components/Dashboard/Forms/NewsModification';
import { Warn } from '@/components/Dashboard/Warn/Warn';
import { useNews } from '@/hooks';

export default function News({ posts }) {
  const { handlerDelete, handlerCreate, handlerModify } = useNews();
  const [arr, setArr] = useState(posts);
  const [showForm, setShowForm] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showWarn, setShowWarn] = useState(false);

  const showModalForm = () => {
    setShowForm(!showForm);
  };
  const showModalWarn = () => {
    setShowWarn(false);
  };
  const showModalModify = () => {
    setShowModify(false);
  };

  const mainNews = useMemo(() => arr[arr.length - 1], [arr]);
  const otherNews = useMemo(() => arr.slice(0, -1), [arr]).reverse();

  return (
    <Layout>
      <div className="m-4">
        <button
          className="bg-[#1b418a] hover:hover:bg-[#10306b] text-white font-bold py-2 px-4 rounded"
          onClick={showModalForm}
        >
          Crear Noticia
        </button>
        <div className="flex flex-wrap justify-center">
          <div className="sm:grid relative sm:grid-cols-2 sm:max-h-72 shadow-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out mb-5 p-5">
            <button
              className="absolute top-2 right-2 p-2 text-white rounded-xl w-7 h-7 place-content-center"
              onClick={() => {
                setShowWarn(mainNews._id);
              }}
            >
              ❌
            </button>
            <button
              className="absolute top-2 left-2 p-2 text-white rounded-xl w-7 h-7 align-middle"
              onClick={() => {
                setShowModify({
                  id: mainNews._id,
                  title: mainNews.title,
                  picture: mainNews.picture,
                  description: mainNews.description,
                });
              }}
            >
              ✏️
            </button>
            <img
              src={mainNews.picture.secure_url}
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
                <button
                  className="absolute top-2 right-2 p-2 text-white rounded-xl w-7 h-7 align-middle"
                  onClick={() => {
                    setShowWarn(news._id);
                  }}
                >
                  ❌
                </button>
                <button
                  className="absolute top-2 left-2 p-2 text-white rounded-xl w-7 h-7 align-middle"
                  onClick={() => {
                    setShowModify({
                      id: news._id,
                      title: news.title,
                      picture: news.picture,
                      description: news.description,
                    });
                  }}
                >
                  ✏️
                </button>
                <img
                  src={news.picture.secure_url}
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
      {showForm && (
        <FormNews showModalForm={showModalForm} handlerCreate={handlerCreate} />
      )}
      {showWarn && (
        <Warn
          handlerDelete={handlerDelete}
          showModalWarn={showModalWarn}
          showWarn={showWarn}
        />
      )}
      {showModify && (
        <FormModifyNews
          handlerModify={handlerModify}
          showModalModify={showModalModify}
          ShowModify={showModify}
        />
      )}
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
