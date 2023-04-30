import { useRouter } from 'next/router';
import { PreviewItem } from '..';
import useStore from '@/store/globalstore';

export const NextReservations = () => {
  const router = useRouter();
  const allReservas = useStore((state) => state.reservas);
  const reservas = allReservas
    .sort((a, b) => {
      // ordena las reservas por fecha
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    })
    .slice(0, 3);
  return (
    <div
      className="col-span-2 w-full h-full flex flex-col bg-white border border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 pb-4 rounded-lg relative  
        sm:h-full sm:w-full
        lg:col-span-3
        xl:w-full xl:row-start-2 xl:col-start-3 xl:col-span-2
        dark:bg-[#2C2C2C] dark:border-none
        dark:text-slate-100
        "
    >
      <p>Próximas reservas del Quincho</p>
      <div className="w-full grid grid-cols-3 my-1 text-blue-700 dark:text-slate-100 ">
        <p>Nombre</p>
        <p>Fecha</p>
        <p>Hora Inicio</p>
      </div>
      <section className="w-full h-auto flex flex-col gap-2 ">
        {reservas.map((reserva) => {
          return (
            <PreviewItem
              columnOne={reserva.description}
              columnTwo={reserva.date}
              columnThree={reserva.beg_time}
            />
          );
        })}
      </section>
      <button
        className="mt-2 py-2 rounded-lg text-center text-white cursor-pointer transition-all duration-500 bg-[#1b418a] hover:bg-[#10306b]"
        onClick={() => router.push('/dashboard/quincho')}
      >
        Ver todas
      </button>
    </div>
  );
};
