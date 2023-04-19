import { Navbar } from '../Navbar';

export const Layout = ({ children }) => {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-[15rem_1fr] bg-[#f1f5f9]">
            <Navbar />
            <div className="w-full grid lg:max-h-screen lg:overflow-y-auto">
                {children}
            </div>
        </main>
    );
};
