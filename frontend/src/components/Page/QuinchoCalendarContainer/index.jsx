import { useState } from 'react';

import { Layout, QuinchoCalendarDay } from '..';


export function QuinchoCalendarContainer({ props }) {


    const events = props.data;


    //const eventos = currentEventos;

    const months=[
        "enero",
        "febrero",
        "marzo",
        "abril"
    ]


    const eventDates=props.dataDates;


    //Declare an initial state of the form modal
    const [showModal, setShowModal] = useState(false);

    return (
        <Layout
            title={'Disponibilidad Quincho'}
            image={
                'data:image/jpeg;base64,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'
            }
        >
            <div >
                <div class="flex items-center mt-4">
                    <div class="flex ml-6">
                        <button>
                            <svg
                                class="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
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
                        Mayo, 2023
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
                        return (
                            <QuinchoCalendarDay
                                key={dateEv.date}
                                dateCard={dateEv.date}
                                eventArray={events.filter(
                                    (dateE) => dateE.date === dateEv.date
                                )}
                                setShowModal={setShowModal}
                            />
                        );
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

                <button
                    className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Formulario
                </button>

                {/* Si el estado del modal es true, renderiza el formulario */}
                {showModal ? (
                    <>
                        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                        <h4 className="text-2xl font=semibold">
                                            Eventos
                                        </h4>
                                        <button
                                            className="bg-transparent border-0 text-black float-right"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="text-black opacity-7 h-6 w-6 text-xl block bg-red-400 py-0 rounded-full">
                                                {' '}
                                                {/* botón cerrar */}{' '}
                                            </span>
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <form className="w-full max-w-lg">
                                            <div className="flex flex-wrap -mx-3 mb-6">
                                                <div className="w-full px-3">
                                                    <label
                                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                        for="grid-first-name"
                                                    >
                                                        Nombre del cliente
                                                    </label>
                                                    <input
                                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                        id="grid-first-name"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-6">
                                                <div className="w-full px-3">
                                                    <label
                                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                        for="grid-password"
                                                    >
                                                        Nombre evento
                                                    </label>
                                                    <input
                                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        id="grid-password"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-2 mb-3">
                                                <div className="w-full px-3 ">
                                                    <label
                                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                        for="grid-city"
                                                    >
                                                        FECHA
                                                    </label>
                                                    <input
                                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                        id="grid-city"
                                                        type="text"
                                                        placeholder=""
                                                    />
                                                </div>
                                                <div className="w-full px-3 mb-6 md:mb-0">
                                                    <p></p>
                                                    <label
                                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                        for="grid-state"
                                                    >
                                                        Estado de la reserva
                                                    </label>
                                                    <div className="relative">
                                                        <select
                                                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            id="grid-state"
                                                        >
                                                            <option>
                                                                Reserva
                                                                Solicitada
                                                            </option>
                                                            <option>
                                                                Reserva
                                                                Confirmada
                                                            </option>
                                                            <option>
                                                                Reserva Pagada
                                                            </option>
                                                        </select>
                                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                            <svg
                                                                className="fill-current h-4 w-4"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Actualizar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </Layout>
        // <h1>Hola</h1>
    );
}






