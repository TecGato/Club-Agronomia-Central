import { NavLink } from '../NavLink';
import { routes } from './routes';

export const Navbar = () => {
    return (
        <nav className="w-60 h-screen bg-neutral-900 flex flex-col justify-between items-center gap-1 py-7 px-4">
            <div>
                <div className="flex gap-2 mb-5">
                    <img className="w-11" src="logo.webp" alt="" />
                    <p className="text-white">Club Agronomia Central</p>
                </div>
                <div className="flex flex-col gap-1">
                    {routes.map(({ icon, pathName, name }) => (
                        <NavLink
                            key={pathName}
                            pathname={pathName}
                            name={name}
                            icon={icon}
                        />
                    ))}
                </div>
            </div>
            <div>
                <button>Cerrar Sesión</button>
            </div>
        </nav>
    );
};
