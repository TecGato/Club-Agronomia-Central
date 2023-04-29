import { Layout, Publishing } from '@/components/Dashboard';

export default function PaginadePubli() {
  return (
    <Layout>
      <section className="p-3">
        <section>
          <h1 className='text-2xl text-center'>Anuncios</h1>
        </section>
        {/* ADS */}
        <section className="flex flex-wrap gap-2 justify-center">
          {/* Publicidad */}
          <Publishing number={1} img={"https://img.freepik.com/foto-gratis/pastel-delicioso-dulce-fresas-baiser-plato_181624-29179.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"} name={"Tortas Lolita"} tel={"99959995"}  />
          <Publishing number={2} img={"https://img.freepik.com/foto-gratis/pastel-delicioso-dulce-fresas-baiser-plato_181624-29179.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"} name={"Tortas Lolita"} tel={"99959995"}  />
          <Publishing number={3} img={"https://img.freepik.com/foto-gratis/pastel-delicioso-dulce-fresas-baiser-plato_181624-29179.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"} name={"Tortas Lolita"} tel={"99959995"}  />
          <Publishing number={4} img={"https://img.freepik.com/foto-gratis/pastel-delicioso-dulce-fresas-baiser-plato_181624-29179.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"} name={"Tortas Lolita"} tel={"99959995"}  />
          <Publishing number={5} img={"https://img.freepik.com/foto-gratis/pastel-delicioso-dulce-fresas-baiser-plato_181624-29179.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"} name={"Tortas Lolita"} tel={"99959995"}  />
        </section>
      </section>
    </Layout>
  );
}
