import { useState } from 'react';
import { QuinchoCalendarDay } from '..';
import { QuinchoCalendarForm } from '../QuinchoCalendarForm';

export function QuinchoCalendarContainer({
  dataDates,
  data,
  itsAdmin = false,
}) {
  const events = data;
  const months = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo',
    4: 'Abril',
    5: 'Mayo',
    6: 'Junio',
    7: 'Julio',
    8: 'Agosto',
    9: 'Septiembre',
    10: 'Octubre',
    11: 'Noviembre',
    12: 'Diciembre',
  };

  const date = new Date();

  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  const nextYear = () => {
    setYear(year + 1);
  };

  const prevYear = () => {
    setYear(year - 1);
  };

  const nextMonth = () => {
    if (month === 12) {
      nextYear();
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  const prevMonth = () => {
    if (month === 1) {
      prevYear();
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const eventDates = dataDates;
  //Declare an initial state of the form modal
  const [showModal, setShowModal] = useState(false);

  //Declare an initial state of the card detail
  const [showCard, setShowCard] = useState(false);

  return (
    <div>
      <div class="flex items-center mt-4">
        <div class="flex ml-6">
          <button>
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={prevMonth}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button>
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={nextMonth}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <h2 class="ml-2 text-xl font-bold leading-none">
          {months[month]}, {year}
        </h2>
      </div>

      {/* Encabezado del calendario mensual */}
      <div class="grid grid-cols-7 mt-4 border-t-4 border-indigo-500">
        <div class="pl-1 text-sm">Lunes</div>
        <div class="pl-1 text-sm">Martes</div>
        <div class="pl-1 text-sm">Miércoles</div>
        <div class="pl-1 text-sm">Jueves</div>
        <div class="pl-1 text-sm">Viernes</div>
        <div class="pl-1 text-sm">Sábado</div>
        <div class="pl-1 text-sm">Domingo</div>
      </div>

      {/* Contenedor principal */}

      <div class="grid flex-grow w-full h-auto grid-cols-7 grid-rows-5 gap-px pt-px mt-1 bg-gray-200">
        {eventDates.map((dateEv) => {
          return dateEv.date ? (
            <QuinchoCalendarDay
              key={dateEv.date}
              dateCard={dateEv.date}
              eventArray={events.filter((dateE) => dateE.date === dateEv.date)}
              showCard={showCard}
              setShowCard={setShowCard}
              month={month}
              year={year}
              itsAdmin={itsAdmin}
            />
          ) : null;
        })}
      </div>

      {/* Tags */}

      <h3>Indicadores de la reserva</h3>
      <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs">
        <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
        <span class="ml-2 font-medium leading-none truncate">
          Reservas solicitadas
        </span>
      </button>

      <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs ">
        <span class="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full"></span>
        <span class="ml-2 font-medium leading-none truncate">
          Reservas Solicitadas y confirmadas
        </span>
      </button>

      <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs ">
        <span class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></span>
        <span class="ml-2 font-medium leading-none truncate">
          Reservas Solicitadas, confirmadas y pagadas
        </span>
      </button>

      {/* MODAL */}

      {!itsAdmin && (
        <button
          className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Solicitar nueva reserva
        </button>
      )}

      {/* Si el estado del modal es true, renderiza el formulario */}
      {showModal ? (
        <QuinchoCalendarForm setShowModal={setShowModal} itsAdmin={itsAdmin} />
      ) : null}
    </div>
  );
}
