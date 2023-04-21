import { useState } from 'react';
import { MobileMenu, NavLink } from '..';
import { clubLinks, sportsLinks } from './links';

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="w-full h-14 fixed z-50 bg-white flex justify-between items-center shadow-xl px-3">
      <img src="/logo.webp" className="w-12" alt="" />
      <p className="font-semibold text-lg lg:hidden">Club Agronomia Central</p>

      <ul className="gap-4 hidden lg:flex">
        <NavLink text={'Inicio'} link={'/'} />
        <NavLink text={'El Club'} link={'/club'} sonLinks={clubLinks} />
        <NavLink text={'Deportes'} link={'/deportes'} sonLinks={sportsLinks} />
        <NavLink text={'Testimonios'} link={'/testimonios'} />
        <NavLink text={'Noticias'} link={'/noticias'} />
        <NavLink text={'Contactanos'} link={'/contacto'} />
        <NavLink text={'Login'} link={'/dashboard/auth/login'} />
      </ul>
      <div
        className={`w-10 h-10 relative ${openMenu ? 'fixed z-50' : 'relative'}`}
      >
        <button
          onClick={handleToggleMenu}
          className={`flex absolute flex-col w-10 h-10 justify-center items-center border-none bg-transparent gap-[0.62rem] lg:hidden`}
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
      </div>
      <MobileMenu openMenu={openMenu} />
    </header>
  );
}
