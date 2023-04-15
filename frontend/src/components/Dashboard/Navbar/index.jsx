import { NavLink } from '../NavLink';
import { routes } from './routes';

export const Navbar = () => {
    return (
        <nav className="w-60 h-screen bg-neutral-900 flex flex-col justify-between items-center gap-1 py-7 px-4 ">
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
            <button
                className={`w-full h-12 flex gap-4 items-center rounded-lg px-2 group cursor-pointer transition-all duration-500 bg-[#1b418a] hover:bg-[#10306b] `}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    height={26}
                    width={26}
                    className="group-hover:scale-110 transition-all duration-300"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                        {'{'}' '{'}'}
                        <g id="Interface / Log_Out">
                            {'{'}' '{'}'}
                            <path
                                id="Vector"
                                d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75"
                                stroke="#ffffff"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            {'{'}' '{'}'}
                        </g>
                        {'{'}' '{'}'}
                    </g>
                </svg>
                <span className="w-full text-white text-start text-md">
                    Cerrar Sesion
                </span>
            </button>
        </nav>
    );
};
