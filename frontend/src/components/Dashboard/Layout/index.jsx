export const Layout = ({ children }) => {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-[15rem_1fr]">
            <nav className="w-60 h-screen bg-slate-800 hidden lg:flex">barra xd</nav>
            <main>{children}</main>
        </main>
    );
};
