import { Banner, Contributions, Donation } from '..';
import { useState } from 'react';

export function HomePage() {
    const [donate, setDonate] = useState(false);
    const visibleContributions = () => {
        setDonate(!donate);
    };
    return (
        <>
            <Banner />
            <h1 className="text-3xl text-gray-800 font-bold underline">Bienvenidos</h1>
            <Donation visibleContributions={ visibleContributions } />
            { donate ? <Contributions visibleContributions={visibleContributions} /> : null}
        </>
    );
};