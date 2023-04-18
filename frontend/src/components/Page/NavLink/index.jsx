import Link from 'next/link';

export function NavLink({ text, link, color = 'text-black', sonLinks }) {
    return (
        <>
            <li className="px-1 relative group">
                <Link
                    className={`font-bold text-gray-700 text-lg before:transition-all before:duration-300 rounded-md before:content-[''] before:w-full before:scale-x-0 before:h-1 before:rounded-lg before:bg-blue-600 before:absolute before:top-full hover:before:scale-x-100 before:origin-bottom-left ${color}`}
                    href={link}
                >
                    {text}
                </Link>
                {sonLinks && (
                    <ul className="z-40 w-max text-gray-700 py-4 px-2 absolute top-[calc(100%+4px)] rounded-lg scale-y-0 transition-all duration-200 origin-top group-hover:scale-y-100 bg-white drop-shadow-lg">
                        {sonLinks.map(({ text, linkSon }) => (
                            <li className="px-1 relative before:transition-all before:duration-300 rounded-md before:content-[''] before:w-full before:scale-x-0 before:h-1 before:rounded-lg before:bg-blue-600 before:absolute before:top-full hover:before:scale-x-100 before:origin-bottom-left">
                                <Link
                                    className={`font-bold text-gray-700 text-lg ${color}`}
                                    href={linkSon}
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        </>
    );
}
