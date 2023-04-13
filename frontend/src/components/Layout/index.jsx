import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

export function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
