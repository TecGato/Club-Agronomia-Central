import React from 'react';
import Footer from '../Footer';
import { Navbar } from '../Navbar';

export function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
