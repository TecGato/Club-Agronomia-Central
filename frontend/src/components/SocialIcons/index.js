import {Icons} from "./icons"

export default function SocialIcons() {
    return (
        <div className="text-teal-500">
            {
                Icons.map((icon) => (
                    <span key={icon.name} className="p-2  cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-gray-100 duration">{icon.svg}</span>
                ))
            }
        </div>
    );
};