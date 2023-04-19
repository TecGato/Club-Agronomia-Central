import Head from 'next/head';
import { Navbar, Footer, HeaderTitle } from '..';

export function Layout({ children, image, title }) {
  return (
    <>
      <Head>
        <title>{title && `${title} -`} Club Agronomía Central</title>
      </Head>
      <Navbar />
      <main className="w-full pt-14 min-h-screen">
        {title && <HeaderTitle image={image} title={title} />}
        <div className="w-full lg:max-w-5xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}
