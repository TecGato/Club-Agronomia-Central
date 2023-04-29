import { Layout, Publishing } from '@/components/Dashboard';

export default function PaginadePubli() {
  return (
    <Layout>
      <section className="p-3">
        <section className=" text-end m-2">
          <button className="mt-4 mr-4 w-48 h-12 inline-flex justify-around items-center px-3 text-lg py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Añadir anuncio 
            <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_Plus_Square"> <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g> </g></svg>

          </button>
        </section>

        {/* ADS */}
        <section className="w-full h-[calc(100vh-60px)] flex flex-wrap gap-2 2xl:gap-4 lg:items-center justify-center">
          {/* Publicidad */}
          <Publishing
            number={1}
            img={
              'https://img.freepik.com/foto-gratis/pastel-delicioso-dulce-fresas-baiser-plato_181624-29179.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
            }
            name={'Tortas Lolita'}
            tel={'99959995'}
          />
          <Publishing
            number={2}
            img={
              'https://img.freepik.com/foto-gratis/pastel-delicioso-dulce-fresas-baiser-plato_181624-29179.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
            }
            name={'Tortas Lolita'}
            tel={'99959995'}
          />
          <Publishing
            number={3}
            img={
              'https://img.freepik.com/foto-gratis/pastel-delicioso-dulce-fresas-baiser-plato_181624-29179.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
            }
            name={'Tortas Lolita'}
            tel={'99959995'}
          />
          <Publishing
            number={4}
            img={
              'https://img.freepik.com/foto-gratis/pastel-delicioso-dulce-fresas-baiser-plato_181624-29179.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
            }
            name={'Tortas Lolita'}
            tel={'99959995'}
          />
          <Publishing
            number={5}
            img={
              'https://img.freepik.com/foto-gratis/pastel-delicioso-dulce-fresas-baiser-plato_181624-29179.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
            }
            name={'Tortas Lolita'}
            tel={'99959995'}
          />
        </section>
      </section>
    </Layout>
  );
}
