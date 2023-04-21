import axios from "axios";

export function QuinchoCalendarForm(props){

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            client: event.target.client.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            date: event.target.date.value,
            beg_time: event.target.beg_time_h.value + ":" + event.target.beg_time_m.value ,
            end_time: event.target.end_time_h.value + ":" +event.target.end_time_m.value ,
            description: event.target.description.value,
            name: "event name",
            state:1,
            amount:0,

        }


        const response = axios.post('http://localhost:3001/api/events', data)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        // const result = await response.json()
        // alert(`Evento creado?: ${result.data}`)
    }



    return (
        <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-solid border-red-300">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <h6 className="text-2xl font=semibold">
                            Ingresá tus datos
                        </h6>
                        <button
                            className="bg-transparent border-0 text-black float-right"
                            onClick={() => props.setShowModal(false)}
                        >
                            <span className="text-black opacity-7 h-6 w-6 text-xl block bg-red-400 py-0 rounded-full">
                                {' '}
                                {' '}
                            </span>
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <form className="w-full max-w-lg" onSubmit={handleSubmit}>

                            <div className="flex flex-wrap -mx-3 mb-0.5">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="client"
                                    >
                                        Nombre Completo
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="client"
                                        name="client"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-0.5">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        email
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-0.5">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="phone"
                                    >
                                        Teléfono
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-0.5">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="date"
                                    >
                                        Fecha del evento
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="date"
                                        name="date"
                                        type="date"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="flex  -mx-3 mb-0.5">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Hora de inicio
                                    </label>
                                    <div class="inline-flex text-lg border rounded-md shadow-lg p-2">
                                        <select
                                        id="beg_time_h"
                                        name="beg_time_h"
                                        className="px-2 outline-none appearance-none bg-transparent">
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="00">00</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                        </select>

                                        <span class="px-2">:</span>
                                        <select
                                        id="beg_time_m"
                                        name="beg_time_m"
                                        class="px-2 outline-none appearance-none bg-transparent">
                                            <option value="00">00</option>
                                            <option value="01">30</option>

                                        </select>
                                        {/* <select
                                        id="beg_time_s"
                                        name="beg_time_s"
                                        class="px-2 outline-none appearance-none bg-transparent">
                                            <option value="AM">AM</option>
                                            <option value="PM">PM</option>
                                        </select> */}
                                    </div>
                                </div>
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Hora de finalización
                                    </label>
                                    <div class="inline-flex text-lg border rounded-md shadow-lg p-2">
                                        <select
                                        id="end_time_h"
                                        name="end_time_h"
                                        class="px-2 outline-none appearance-none bg-transparent">
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="00">00</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                        </select>
                                        <span class="px-2">:</span>
                                        <select
                                        id="end_time_m"
                                        name="end_time_m"
                                        class="px-2 outline-none appearance-none bg-transparent">
                                            <option value="00">00</option>
                                            <option value="01">30</option>
                                        </select>
                                        {/* <select
                                        id="end_time_s"
                                        name="end_time_s"
                                        class="px-2 outline-none appearance-none bg-transparent">
                                            <option value="AM">AM</option>
                                            <option value="PM">PM</option>
                                        </select> */}
                                    </div>

                                </div>

                            </div>

                            <div className="flex flex-wrap -mx-3 mb-2">
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="description"
                                    >
                                        Descripción del evento
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="description"
                                        name="description"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </div>


                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                    {/* <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-state"
                                    >
                                        Estado de la reserva
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                    </div> */}
                                </div>
                            </div>

                            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={() => props.setShowModal(false)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="submit"

                                >
                                    SOLICITAR RESERVA
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}