import { slides } from "./slides"

export function Banner() {
    return (
        <div className="max-w-[100%] h-[720px] w-full m-auto relative">
            <div style={{backgroundImage:`url(${slides[3].src})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
               
            </div>
            
        </div>
    );
};

{/* <img src={slides[0].src} alt="banner" /> */}