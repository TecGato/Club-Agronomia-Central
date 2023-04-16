import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavLink = ({ icon, pathname, name }) => {
    const router = useRouter();
    return (
        <Link href={pathname} className="text-white text-md">
            <div
                className={`w-full h-12 flex gap-4 items-center rounded-lg px-2 group cursor-pointer transition-all duration-500 ${
                    router.pathname === pathname
                        ? 'bg-[#1b418a]'
                        : 'hover:bg-neutral-800'
                } `}
            >
                {icon}
                {name}
            </div>
        </Link>
    );
};
