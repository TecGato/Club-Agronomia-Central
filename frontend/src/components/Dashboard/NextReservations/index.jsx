import { PreviewReserv } from '..';

export const NextReservations = () => {
    return (
        <div
            className="col-span-2 w-full h-full flex flex-col bg-white border border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 pb-4 rounded-lg relative  
        sm:h-[200px] sm:w-[250px] 
        xl:w-[450px] xl:row-start-2 xl:col-start-3 
        "
        >
            <p>Proximas reservas del quincho</p>
            <div className="w-full grid grid-cols-3 my-1">
                <p className="text-blue-700">Nombre</p>
                <p className="text-blue-700">Fecha</p>
                <p className="text-blue-700">Hora Inicio</p>
            </div>
            <section className="w-full max-h-[132px] overflow-hidden flex flex-col gap-2 ">
                <PreviewReserv
                    name={'Cumpleaños Camila'}
                    date={'2 de Mayo'}
                    hourBegin="10:00am"
                />
                <PreviewReserv
                    name={'Cumpleaños Camila'}
                    date={'2 de Mayo'}
                    hourBegin="10:00am"
                />
                <PreviewReserv
                    name={'Cumpleaños Camila'}
                    date={'2 de Mayo'}
                    hourBegin="10:00am"
                />
                <PreviewReserv
                    name={'Cumpleaños Camila'}
                    date={'2 de Mayo'}
                    hourBegin="10:00am"
                />
                <PreviewReserv
                    name={'Cumpleaños Camila'}
                    date={'2 de Mayo'}
                    hourBegin="10:00am"
                />
            </section>
            <a className="mt-2 py-2 rounded-lg text-center text-white cursor-pointer transition-all duration-500 bg-[#1b418a] hover:bg-[#10306b]">
                Ver todas
            </a>
        </div>
    );
};
