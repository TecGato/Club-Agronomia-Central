import React, { useState } from 'react';
import NavLink from '../NavLink';
import { IconMobileMenu } from './icon';

export default function MobileMenu({ openMenu }) {
    const [clubOpen, setClubOpen] = useState(false);
    const [sportsOpen, setSportsOpen] = useState(false);

    return (
        <section
            className={`w-full h-full bg-slate-500 top-0 left-0 fixed transition-all duration-500 [clip-path:circle(0%_at_100%_0%)] ${
                openMenu && '[clip-path:circle(150%_at_100%_0%)]'
            }`}
        >
            <div className="w-full h-full flex flex-col justify-center items-center">
                <ul className="w-3/4">
                    {/* Link Home */}
                    <div className="h-10 flex items-center ">
                        <NavLink text={'INICIO'} link={'/'} />
                    </div>
                    {/* Link Club */}
                    <div className="flex w-full h-10 justify-between items-center">
                        <NavLink text={'EL CLUB'} link={'/club'} />
                        <button
                            onClick={() => setClubOpen(!clubOpen)}
                            className={`w-[40px] h-[40px] flex justify-center items-center transition-all duration-300 ${
                                clubOpen && 'rotate-180'
                            }`}
                        >
                            <IconMobileMenu />
                        </button>
                    </div>
                    {clubOpen && (
                        <div className="mb-2 ml-5 transition-all duration-100 animate-[openMobileMenu_0.1s_ease] origin-top">
                            <NavLink
                                text={'COMISIÓN DIRECTIVA'}
                                link={'/club/comision-directiva'}
                            />
                            <NavLink
                                text={'HISTORIA'}
                                link={'/club/historia'}
                            />
                            <NavLink
                                text={'INSTALACIONES'}
                                link={'/club/instalaciones'}
                            />
                        </div>
                    )}
                    {/* Link Sports */}
                    <div
                        className={`flex w-full h-10 justify-between items-center transition-all duration-200`}
                    >
                        <NavLink text={'DEPORTES'} link={'/deportes'} />
                        <button
                            onClick={() => setSportsOpen(!sportsOpen)}
                            className={`w-[40px] h-[40px] flex justify-center items-center transition-all duration-300 ${
                                sportsOpen && 'rotate-180'
                            }`}
                        >
                            <IconMobileMenu />
                        </button>
                    </div>
                    {sportsOpen && (
                        <div className="mb-2 ml-5 transition-all duration-100 animate-[openMobileMenu_0.1s_ease] origin-top">
                            <NavLink
                                text={'AJEDREZ'}
                                link={'/deportes/ajedrez'}
                            />
                            <NavLink
                                text={'FUTBOL INFANTIL'}
                                link={'/deportes/futbol-infantil'}
                            />
                            <NavLink
                                text={'FUTSAL'}
                                link={'/deportes/futsal'}
                            />
                            <NavLink
                                text={'FUTSAL FEMENINO'}
                                link={'/deportes/futsal-femenino'}
                            />
                            <NavLink
                                text={'TAEKWONDO'}
                                link={'/deportes/taekwondo'}
                            />
                            <NavLink
                                text={'CENTRO DE ENTRENAMIENTO'}
                                link={'/deportes/centro-de-entrenamiento'}
                            />
                        </div>
                    )}
                    {/* Link Stories */}
                    <div className="h-10 flex items-center ">
                        <NavLink text={'HISTORIAS'} link={'/historias'} />
                    </div>
                    {/* Link Contact */}
                    <div className="h-10 flex items-center ">
                        <NavLink text={'CONTACTANOS'} link={'/contacto'} />
                    </div>
                </ul>
            </div>
        </section>
    );
}
