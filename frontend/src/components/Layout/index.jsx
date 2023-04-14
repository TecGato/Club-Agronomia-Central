import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

export function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen">
                <div className="w-full lg:max-w-5xl mx-auto">{children}</div>
            </main>
            <Footer />
        </>
    );
}
