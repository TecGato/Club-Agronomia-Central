import axios from 'axios';
import { useState } from 'react';
import { useQuincho } from '@/hooks';
import { Warn } from '@/components/Dashboard/Warn/Warn';

export function QuinchoCalendarForm({
  setShowModal,
  itsAdmin = false,
  setShowCard,
  eventArray,
}) {
  const { handlerDelete } = useQuincho();

  const [showWarn, setShowWarn] = useState(false);
  console.log(showWarn);
  const [data, setData] = useState({
    client: '',
    email: '',
    phone: '',
    date: '',
    beg_time: '',
    end_time: '',
    description: '',
    name: 'Event name',
    state: 1,
    amount: 0,
  });

  const showModalWarn = () => {
    setShowWarn(false);
  };

  const handleReservationChange = (event) => {
    const { name, value } = event.target;
    setData({ [name]: value });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'beg_time') {
      if (value === 'schedule1') {
        setData({ ...data, beg_time: '11:00', end_time: '17:00' });
      } else {
        setData({ ...data, beg_time: '19:00', end_time: '02:00' });
      }
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    if (itsAdmin) {
      try {
        const response = await axios.put(
          `http://localhost:3001/api/events/${eventArray[0]._id}`,
          data
        );
        alert('Evento modificado');
        setShowModal ? setShowModal(false) : setShowCard(false);
        window.location.reload();
      } catch (error) {
        alert('Error al crear evento');
      }
    } else {
      try {
        const response = await axios.post(
          'http://localhost:3001/api/events',
          data
        );
        alert('Evento creado');
        setShowModal ? setShowModal(false) : setShowCard(false);
        window.location.reload();
      } catch (error) {
        alert('Error al crear evento');
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-solid border-red-300">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h6 className="text-2xl font=semibold">Ingresá tus datos</h6>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => {
                  if (setShowModal) {
                    setShowModal(false);
                  } else {
                    setShowCard(false);
                  }
                }}
              >
                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-red-400 py-0 rounded-full">
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
                      onChange={handleChange}
                      value={itsAdmin ? eventArray[0].client : data.client}
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
                      onChange={handleChange}
                      value={itsAdmin ? eventArray[0].email : data.email}
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
                      onChange={handleChange}
                      value={itsAdmin ? eventArray[0].phone : data.phone}
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
                      onChange={handleChange}
                      value={itsAdmin ? eventArray[0].date : data.date}
                    />
                  </div>
                </div>

                <div className="flex  -mx-3 mb-0.5">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Horario de Reserva
                    </label>
                    <div
                      class="relative"
                      // flex justify-center text-lg border rounded-md shadow-lg p-2
                    >
                      <select
                        id="beg_time"
                        name="beg_time"
                        className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        // "px-2 outline-none appearance-none bg-transparent"
                        defaultValue={
                          itsAdmin
                            ? eventArray[0].beg_time === '11:00'
                              ? 'schedule1'
                              : 'schedule2'
                            : 'default'
                        }
                        onChange={handleChange}
                      >
                        <option value="default" disabled>
                          Seleccione Horario de Reserva
                        </option>
                        <option value="schedule1">11Hs a 17Hs</option>
                        <option value="schedule2">19Hs a 02Hs</option>
                      </select>
                    </div>
                  </div>
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
                      onChange={handleChange}
                      value={
                        itsAdmin ? eventArray[0].description : data.description
                      }
                    />
                  </div>
                </div>

                {itsAdmin && (
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-state"
                      >
                        Estado de la reserva
                      </label>
                      <div className="relative">
                        <select
                          className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                          name="state"
                          onChange={handleReservationChange}
                          defaultValue={0}
                        >
                          <option disabled value={0}>
                            Status de la Reserva
                          </option>
                          <option value={1}>Reserva Solicitada</option>
                          <option value={2}>Reserva Confirmada</option>
                          <option value={3}>Reserva Pagada</option>
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
                )}

                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => {
                      if (setShowModal) {
                        setShowModal(false);
                      } else {
                        setShowCard(false);
                      }
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                  >
                    {!itsAdmin ? 'Solicitar Reserva' : 'Guardar Cambios'}
                  </button>
                  {itsAdmin && (
                    <button
                      type="button"
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      onClick={() => setShowWarn(eventArray[0]._id)}
                    >
                      Eliminar Reserva
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showWarn && (
        <Warn
          handlerDelete={handlerDelete}
          showModalWarn={showModalWarn}
          showWarn={showWarn}
        />
      )}
    </>
  );
}
