import Link from 'next/link';
import { useState } from 'react';
import NavLink from '../NavLink';
import { QuinchoCalendarDay } from '../QuinchoCalendarDay';
import { Layout } from '@/components';



export function QuinchoCalendarContainer(){

    /*
    EJEMPLO DEL ARRAY
    "id":1
    "name": "Desayuno del Grupo Juvenil"
    "beg_tim":"8:30"
    "end_time":"11:30"
    "state": 1
    "ammount": "$21.500"
    "Description":"We are going to have fun"




    */

    const eventos=[
        {
            "id":1,
            "name": "Desayuno del Grupo Juvenil",
            "beg_time":"8:30am",
            "end_time":"11:30am",
            "date":"2 mayo",
            "state": 1,
            "ammount": "$21.500",
            "email":"client1@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":2,
            "name": "Quince años Familia Henry",
            "beg_time":"2:15pm",
            "end_time":"5:15pm",
            "date":"2 mayo",
            "state": 3,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":3,
            "name": "Almuerzo graduación",
            "beg_time":"12:00m",
            "end_time":"5:15pm",
            "date":"4 mayo",
            "state": 1,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":4,
            "name": "Carnaval local",
            "beg_time":"6:00pm",
            "end_time":"8:15pm",
            "date":"13 mayo",
            "state": 2,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":5,
            "name": "Rumba Grupo 6",
            "beg_time":"6:00pm",
            "end_time":"8:15pm",
            "date":"6 mayo",
            "state": 2,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":6,
            "name": "Asado del grupo de futbol",
            "beg_time":"7:00pm",
            "end_time":"8:15pm",
            "date":"14 mayo",
            "state": 3,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":7,
            "name": "Feria de las flores",
            "beg_time":"6:00pm",
            "end_time":"8:15pm",
            "date":"17 mayo",
            "state": 3,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":8,
            "name": "Fiesta de integración Henry",
            "beg_time":"6:00pm",
            "end_time":"8:15pm",
            "date":"4 mayo",
            "state": 3,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":9,
            "name": "Cumpleaños feliz",
            "beg_time":"7:00pm",
            "end_time":"8:15pm",
            "date":"27 mayo",
            "state": 3,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":10,
            "name": "Desayuno del grupo Nacional",
            "beg_time":"8:30am",
            "end_time":"8:15pm",
            "date":"28 mayo",
            "state": 1,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":11,
            "name": "Entrega PF",
            "beg_time":"8:30am",
            "end_time":"8:15pm",
            "date":"28 mayo",
            "state": 3,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":12,
            "name": "Fiesta de las monjitas",
            "beg_time":"6:00pm",
            "end_time":"8:15pm",
            "date":"4 mayo",
            "state": 3,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"red"
        },
        {
            "id":13,
            "name": "Entrega Cliente",
            "beg_time":"6:15pm",
            "end_time":"8:15pm",
            "date":"31 mayo",
            "state": 3,
            "ammount": "$21.500",
            "email":"client2@ac.com.arg",
            "phone":"325 256 90 15",
            "description":"We are going to have fun",
            "color":"blue"
        }

]

    //const eventos = currentEventos;


    const fechas=[
        {
            "date":"1 mayo",
            "eventos":[]
        },
        {
            "date":"2 mayo",
            "eventos":[1,2]
        },
        {
            "date":"3 mayo",
            "eventos":[]
        },
        {
            "date":"4 mayo",
            "eventos":[3,8,12]
        },
        {
            "date":"5 mayo",
            "eventos":[]
        },
        {
            "date":"6 mayo",
            "eventos":[5]
        },
        {
            "date":"7 mayo",
            "eventos":[]
        },
        {
            "date":"8 mayo",
            "eventos":[]
        },
        {
            "date":"9 mayo",
            "eventos":[]
        },
        {
            "date":"10 mayo",
            "eventos":[]
        },
        {
            "date":"11 mayo",
            "eventos":[]
        },
        {
            "date":"12 mayo",
            "eventos":[]
        },
        {
            "date": "13 mayo",
            "eventos":[4]
        },
        {
            "date": "14 mayo",
            "eventos":[6]
        },
        {
            "date":"15 mayo",
            "eventos":[]
        },
        {
            "date":"16 mayo",
            "eventos":[]
        },
        {
            "date":"17 mayo",
            "eventos":[7]
        },
        {
            "date":"18 mayo",
            "eventos":[]
        },
        {
            "date":"19 mayo",
            "eventos":[]
        },
        {
            "date":"20 mayo",
            "eventos":[]
        },
        {
            "date":"21 mayo",
            "eventos":[]
        },
        {
            "date":"22 mayo",
            "eventos":[]
        },
        {
            "date":"23 mayo",
            "eventos":[]
        },
        {
            "date":"24 mayo",
            "eventos":[]
        },
        {
            "date":"25 mayo",
            "eventos":[]
        },
        {
            "date":"26 mayo",
            "eventos":[]
        },
        {
            "date":"27 mayo",
            "eventos":[9]
        },
        {
            "date":"28 mayo",
            "eventos":[]
        },
        {
            "date":"29 mayo",
            "eventos":[]
        },
        {
            "date":"30 mayo",
            "eventos":[]
        },
        {
            "date":"31 mayo",
            "eventos":[]
        },


    ]

    //const fechas = currentFechas;
//Declare an initial state of the form modal
const [showModal, setShowModal] = useState(false);


return(
    <Layout>

    <div style={{padding: "30px"}}>
     <div class="flex items-center mt-4">
                    <div class="flex ml-6">
                        <button>
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button>
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <h2 class="ml-2 text-xl font-bold leading-none">Mayo, 2023</h2>
                </div>




    {/* Encabezado del calendario mensual */}
    <div class="grid grid-cols-7 mt-4 border-t-4 border-indigo-500" >
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


    {fechas.map(fecha=>{
        return <QuinchoCalendarDay
        key={fecha.date}
        fechacard={fecha.date}
        arrayeventos={eventos.filter(fechaE=>fechaE.date===fecha.date)} //le mando al componente dumb los eventos que corresponden a cada fecha
        setShowModal={setShowModal}

        />

    })}

    </div>

    {/* Leyenda */}

        <h3>Indicadores de la reserva</h3>
                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs">
                                <span class="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
                                <span class="ml-2 font-medium leading-none truncate">Reservas solicitadas</span>
                            </button>

                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs ">
                                <span class="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full"></span>
                                <span class="ml-2 font-medium leading-none truncate">Reservas Solicitadas y confirmadas</span>
                            </button>

                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs ">
                                <span class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></span>
                                <span class="ml-2 font-medium leading-none truncate">Reservas Solicitadas, confirmadas y pagadas</span>
                            </button>



        {/* MODAL */}



        <button className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowModal(true)} >Formulario</button>

            {/* Si el estado del modal es true, renderiza el formulario */}
            {showModal?(
                    <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h4 className="text-2xl font=semibold">Eventos</h4>
                <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowModal(false)}>
                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-red-400 py-0 rounded-full"> {/* botón cerrar */} </span>
                </button>
            </div>
            <div className="relative p-6 flex-auto">


                <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Nombre del cliente
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />

                                </div>

                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Nombre evento
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="" />

                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2 mb-3">
                                <div className="w-full px-3 ">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        FECHA
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                <p></p>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                    Estado de la reserva
                                </label>
                                    <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>Reserva Solicitada</option>
                                    <option>Reserva Confirmada</option>
                                    <option>Reserva Pagada</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                                </div>

                            </div>
                            </form>


            </div>
            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowModal(false)}>
                Cancelar
                </button>
                <button className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowModal(false)}>
                Actualizar
                </button>
            </div>
            </div>
        </div>
        </div>


                    </>
                ): null}






    </div>
    </Layout>
);

}

