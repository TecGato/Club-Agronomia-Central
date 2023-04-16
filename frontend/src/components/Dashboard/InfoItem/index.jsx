export const InfoItem = ({ icon, title, number }) => {
    return (
        <div className="sm:h-[200px] sm:w-[200px] flex justify-center flex-col items-start gap-4 border border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg">
            {icon}
            <div className="h-[88px]]">
                <p className="text-neutral-800 text-4xl font-bold">{number}</p>
                <p className="text-neutral-800 text-base font-medium">
                    {title}
                </p>
            </div>
        </div>
    );
};
