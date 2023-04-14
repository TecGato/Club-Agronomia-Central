import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { HeaderTitle } from '../HeaderTitle';

export function Layout({ children, image, title }) {
    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen">
                {title && <HeaderTitle image={image} title={title} />}
                <div className="w-full lg:max-w-5xl mx-auto">{children}</div>
            </main>
            <Footer />
        </>
    );
}
