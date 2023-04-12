import { useState } from 'react';

export function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <header className="w-full h-14 flex justify-between items-center outline outline-1 outline-red-700 px-3">
            <img src="logo.webp" className="w-12" alt="" />
            <p>Club Agronomia Central</p>

            <button className="flex flex-col w-10 h-10 justify-center items-center border-none outline outline-1 outline-red-700 bg-transparent gap-[0.62rem] group">
                <div
                    className="w-full h-[5px] bg-black rounded-md transition-all duration-200 origin-left  group-hover:rotate-45
            "
                ></div>
                <div
                    className="w-full h-[5px] bg-black rounded-md transition-all duration-200 origin-left group-hover:opacity-0
            "
                ></div>
                <div
                    className="w-full h-[5px] bg-black rounded-md transition-all duration-200 origin-left group-hover:-rotate-45
            "
                ></div>
            </button>
        </header>
    );
}
