export const InfoItem = ({ icon, title, number }) => {
    return (
        <div className="h-[200px] w-[200px] flex justify-center flex-col items-start gap-4 border border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg">
            {icon}
            <div>
                <p className="text-neutral-800 text-4xl font-bold">{number}</p>
                <p className="text-neutral-800 text-xl font-bold">{title}</p>
            </div>
        </div>
    );
};
