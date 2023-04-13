import { slides, arrow } from "./slides"

export function Banner() {
    return (
        <div className="max-w-[100%] h-[500px] w-full m-auto relative">
            <div style={{backgroundImage:`url(${slides[0].src})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
            </div>
            <div className="absolute top-[50%] -translate-x-0 tranlate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                {
                    arrow[0].svg
                }
            </div>
            <div className="absolute top-[50%] -translate-x-0 tranlate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                {
                    arrow[1].svg
                }
            </div>
        </div>
    );
};

{/* <img src={slides[0].src} alt="banner" /> */}