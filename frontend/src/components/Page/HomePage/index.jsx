import { Banner, Contributions } from '..';
import { useState } from 'react';

export function HomePage() {
    const [donate, setDonate] = useState(false);
    const visibleContributions = () => {
        setDonate(!donate);
    };
    return (
        <>
            <Banner />
            <h1 className="text-3xl font-bold underline text-gray-800">Bienvenidos</h1>
            <button onClick={visibleContributions} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button">Aportes</button>
            { donate ? <Contributions /> : null}
        </>
    );
};
