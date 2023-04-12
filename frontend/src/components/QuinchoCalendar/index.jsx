import Link from 'next/link';
import { useState } from 'react';
import NavLink from '../NavLink';

export function QuinchoCalendar(){

return(


    <div style={{padding: "20px"}}>

    <h4>Calendario de disponibilidad del Quincho</h4>

    <h2 class="ml-2 text-xl font-bold leading-none">Mayo, 2023</h2>

    {/* Encabezado del calendario mensual */}
    <div class="grid grid-cols-7 mt-4">
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

                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">1 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">2 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">
                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">8:30am</span>
                                <span class="ml-2 font-medium leading-none truncate">Desayuno del Grupo Juvenil</span>
                            </button>
                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">2:15pm</span>
                                <span class="ml-2 font-medium leading-none truncate">Quince años Familia Henry</span>
                            </button>
                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">3 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">4 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">
                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">12:00m</span>
                                <span class="ml-2 font-medium leading-none truncate">Almuerzo graduación</span>
                            </button>
                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">5:15pm</span>
                                <span class="ml-2 font-medium leading-none truncate">Fiesta integración Henry</span>
                            </button>
                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                            <span class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">8:45pm</span>
                                <span class="ml-2 font-medium leading-none truncate">Fiesta de las monjitas</span>
                            </button>

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">5 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">6 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">5:15pm</span>
                                <span class="ml-2 font-medium leading-none truncate">Rumba Grupo 6</span>
                            </button>

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">7 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">8 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">9 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">10 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">11 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">12 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">13 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">
                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">6:00pm</span>
                                <span class="ml-2 font-medium leading-none truncate">Carnaval local</span>
                            </button>
                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">14 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">
                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">7:00pm</span>
                                <span class="ml-2 font-medium leading-none truncate">Asado del grupo de futbol</span>
                            </button>

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">15 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">16 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">17 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">
                        <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">6:00pm</span>
                                <span class="ml-2 font-medium leading-none truncate">Feria de las flores</span>
                            </button>

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">18 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">19 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">20 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>



                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">21 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">22 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>



                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">23 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>



                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">24 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">25 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>



                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">26 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>



                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">27 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">7:00pm</span>
                                <span class="ml-2 font-medium leading-none truncate">Cunpleaños Feliz</span>
                            </button>
                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>



                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">28 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">
                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 border border-gray-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">8:30am</span>
                                <span class="ml-2 font-medium leading-none truncate">Desayuno del Grupo Nacional</span>
                            </button>
                            <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">6:15pm</span>
                                <span class="ml-2 font-medium leading-none truncate">Entrega PF</span>
                            </button>
                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>


                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">29 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>



                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">30 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>




                    <div class="relative flex flex-col bg-white group">
                        <span class="mx-2 my-1 text-xs font-bold">31 Mayo</span>
                        <div class="flex flex-col px-1 py-1 overflow-auto">
                        <button class="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200">
                                <span class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></span>
                                <span class="ml-2 font-light leading-none">6:15pm</span>
                                <span class="ml-2 font-medium leading-none truncate">Entrega Cliente</span>
                            </button>

                        </div>
                        <button class="absolute bottom-0 right-0 flex items-center justify-center hidden w-6 h-6 mb-2 mr-2 text-white bg-gray-400 rounded group-hover:flex hover:bg-gray-500">
                            <svg class="w-5 h-5 w-6 h-6 plus" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>




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


    </div>
);

}

