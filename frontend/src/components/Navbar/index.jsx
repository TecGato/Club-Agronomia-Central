import Link from 'next/link';
import { useState } from 'react';
import NavLink from '../NavLink';

export function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className="w-full h-14 flex justify-between items-center outline outline-1 outline-red-700 px-3">
            <img src="logo.webp" className="w-12" alt="" />
            <p className="font-semibold text-lg lg:hidden">
                Club Agronomia Central
            </p>

            <ul className="gap-4 hidden lg:flex">
                <NavLink text={'INICIO'} link={'/'} />
                <NavLink text={'EL CLUB'} link={'/club'} />
                <NavLink text={'DEPORTES'} link={'/deportes'} />
                <NavLink text={'HISTORIAS'} link={'/historias'} />
                <NavLink text={'CONTACTANOS'} link={'/contacto'} />
            </ul>
            <button
                onClick={handleToggleMenu}
                className="flex flex-col w-10 h-10 justify-center items-center border-none bg-transparent gap-[0.62rem] lg:hidden"
            >
                <div
                    className={`w-full h-[5px] bg-black rounded-md transition-all duration-500 origin-left ${
                        openMenu && 'rotate-45'
                    }
                    `}
                ></div>
                <div
                    className={`w-full h-[5px] bg-black rounded-md transition-all duration-300 origin-left ${
                        openMenu && 'opacity-0 -translate-x-2'
                    }
                    `}
                ></div>
                <div
                    className={`w-full h-[5px] bg-black rounded-md transition-all duration-500 origin-left ${
                        openMenu && '-rotate-45'
                    }
                    `}
                ></div>
            </button>
        </header>
    );
}
