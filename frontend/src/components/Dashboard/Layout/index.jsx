import { Navbar } from '../Navbar';

export const Layout = ({ children }) => {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-[15rem_1fr] bg-[#f9fafb]">
            <Navbar />
            {children}
        </main>
    );
};
