import { useState, useContext } from 'react';
import { validate } from './CalendarFormValidation';
import { useQuincho } from '@/hooks';
import { Warn } from '@/components/Dashboard/Warn/Warn';
import AppContext from '../../../../contexts/AppContext';

export function QuinchoCalendarForm({
  setShowModal,
  itsAdmin = false,
  setShowCard,
  showCard,
}) {
  const { handlerDelete, handlerCreate, handlerUpdate, setLoading } =
    useQuincho();
  const { reservations, setShowMessageModal, showMessageModal } =
    useContext(AppContext);
  const [showWarn, setShowWarn] = useState(false);
  const [data, setData] = useState({
    client: itsAdmin ? showCard.client : '',
    email: itsAdmin ? showCard.email : '',
    phone: itsAdmin ? showCard.phone : '',
    date: itsAdmin ? showCard.date : '',
    beg_time: itsAdmin ? showCard.beg_time : '',
    end_time: itsAdmin ? showCard.end_time : '',
    description: itsAdmin ? showCard.description : '',
    name: itsAdmin ? showCard.name : 'Event Name',
    state: itsAdmin ? showCard.state : 1,
    amount: itsAdmin ? showCard.amount : 0,
    someChange: false,
  });
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);

  const showModalWarn = () => {
    setShowWarn(false);
    setShowCard(false);
  };

  const handleReservationChange = (event) => {
    const { name, value } = event.target;
    setData({ [name]: value, someChange: true });
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
      setData({ ...data, [name]: value, someChange: true });
    }
    setErrors(validate(data, reservations, itsAdmin));
  };

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setErrors(validate(data, reservations, itsAdmin));
    setShowError(false);
    if (Object.keys(errors).length === 0 && data.someChange) {
      if (itsAdmin) {
        try {
          handlerUpdate(data, showCard._id);
          setShowMessageModal('Evento modificado con Éxito');
          setShowModal ? setShowModal(false) : setShowCard(false);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          handlerCreate(data);
          setShowMessageModal('Evento creado con Éxito');
          setShowModal ? setShowModal(false) : setShowCard(false);
        } catch (error) {
          setShowMessageModal(error);
        }
      }
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-solid border-red-300 ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h6 className="text-2xl font=semibold">Ingresa tus datos</h6>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => {
                  console.log('showModal', setShowModal);
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
                  <div className="w-full px-3 mb-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                      htmlFor="client"
                    >
                      Nombre Completo
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="client"
                      name="client"
                      type="text"
                      placeholder=""
                      onChange={handleChange}
                      value={data.client}
                    />
                    {showError && errors.client && (
                      <p className="text-red-400 text-xs">{errors.client}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-0.5">
                  <div className="w-full px-3 mb-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                      htmlFor="email"
                    >
                      email
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="email"
                      name="email"
                      type="text"
                      placeholder=""
                      onChange={handleChange}
                      value={data.email}
                    />
                    {showError && errors.email && (
                      <p className="text-red-400 text-xs">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-0.5">
                  <div className="w-full px-3 mb-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                      htmlFor="phone"
                    >
                      Teléfono
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder=""
                      onChange={handleChange}
                      value={data.phone}
                    />
                    {showError && errors.phone && (
                      <p className="text-red-400 text-xs">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-0.5">
                  <div className="w-full px-3 mb-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                      htmlFor="date"
                    >
                      Fecha del evento
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="date"
                      name="date"
                      type="date"
                      onChange={handleChange}
                      value={data.date}
                    />
                    {showError && errors.date && (
                      <p className="text-red-400 text-xs">{errors.date}</p>
                    )}
                  </div>
                </div>

                <div className="flex  -mx-3 mb-0.5">
                  <div className="w-full px-3 mb-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
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
                            ? showCard.beg_time === '11:00'
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
                      {showError && errors.beg_time && (
                        <p className="text-red-400 text-xs">
                          {errors.beg_time}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full px-3 mb-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                      htmlFor="description"
                    >
                      Descripción del evento
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="description"
                      name="description"
                      type="text"
                      autoComplete="off"
                      placeholder=""
                      onChange={handleChange}
                      value={data.description}
                    />
                    {showError && errors.description && (
                      <p className="text-red-400 text-xs">
                        {errors.description}
                      </p>
                    )}
                  </div>
                </div>

                {itsAdmin && (
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold"
                        htmlFor="grid-state"
                      >
                        Estado de la reserva
                      </label>
                      <div className="relative">
                        <select
                          className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2"
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
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3 mb-2">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                            htmlFor="amount"
                          >
                            COSTO DE LA RESERVA
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="amount"
                            name="amount"
                            type="number"
                            autoComplete="off"
                            placeholder=""
                            onChange={handleChange}
                            value={data.amount}
                          />
                          {showError && errors.amount && (
                            <p className="text-red-400 text-xs">
                              {errors.amount}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col md:flex-row items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
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
                      onClick={() => {
                        setShowWarn(showCard._id);
                      }}
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
          setLoading={setLoading}
        />
      )}
    </>
  );
}
