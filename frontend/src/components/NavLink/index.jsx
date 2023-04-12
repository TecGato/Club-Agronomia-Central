import Link from 'next/link';

export default function NavLink({ text, link }) {
    return (
        <li className="px-1 relative before:transition-all before:origin-bottom-left before:duration-300 rounded-md before:content-[''] before:w-full before:scale-x-0 before:h-1 before:rounded-lg before:bg-blue-600 before:absolute before:top-full hover:before:scale-x-100">
            <Link className="font-bold text-lg" href={link}>
                {text}
            </Link>
        </li>
    );
}
