import { useForm } from '@/hooks';

export const EditAthlete = ({ setEditModal, row }) => {
  const {
    name,
    discipline,
    email,
    contact,
    emergency,
    emergency_name,
    emergency_email,
    formState,
    onInputChange,
  } = useForm(row);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <div className="min-w-min flex flex-col justify-start  items-start gap-4 border bg-white border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg ">
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-lg font-medium text-neutral-800">Editar Atleta</p>
        <div className="flex">
          <button
            type="button"
            className="relative text-gray-400 bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => setEditModal(false)}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <form
        className="w-full flex flex-col gap-4 xl:grid xl:grid-cols-3"
        onSubmit={handleSubmit}
      >
        {/* ========= name ========= */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-gray-900 text-lg text-left"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 placeholder-neutral-500 text-neutral-800 outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
            value={name}
            onChange={onInputChange}
          />
        </div>
        {/* ========= discipline ========= */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-gray-900 text-lg text-left"
          >
            Disciplina:
          </label>
          <input
            type="text"
            id="discipline"
            name="discipline"
            className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 placeholder-neutral-500 text-neutral-800 outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
            value={discipline}
            onChange={onInputChange}
          />
        </div>
        {/* ========= email ========= */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-gray-900 text-lg text-left"
          >
            Correo electronico:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 placeholder-neutral-500 text-neutral-800 outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
            value={email}
            onChange={onInputChange}
          />
        </div>
        {/* ========= contact ========= */}
        <div>
          <label
            htmlFor="contact"
            className="block mb-2 font-medium text-gray-900 text-lg text-left"
          >
            Numero de contacto:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 placeholder-neutral-500 text-neutral-800 outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
            value={contact}
            onChange={onInputChange}
          />
        </div>
        {/* ========= emergency_name ========= */}
        <div>
          <label
            htmlFor="emergency_name"
            className="block mb-2 font-medium text-gray-900 text-lg text-left"
          >
            Contacto de emergencia:
          </label>
          <input
            type="text"
            id="emergency_name"
            name="emergency_name"
            className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 placeholder-neutral-500 text-neutral-800 outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
            value={emergency_name}
            onChange={onInputChange}
          />
        </div>
        {/* ========= emergency ========= */}
        <div>
          <label
            htmlFor="emergency"
            className="block mb-2 font-medium text-gray-900 text-lg text-left"
          >
            Numero de emergencia:
          </label>
          <input
            type="text"
            id="emergency"
            name="emergency"
            className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 placeholder-neutral-500 text-neutral-800 outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
            value={emergency}
            onChange={onInputChange}
          />
        </div>
        {/* ========= emergency_email ========= */}
        <div>
          <label
            htmlFor="emergency_email"
            className="block mb-2 font-medium text-gray-900 text-lg text-left"
          >
            Correo de emergencia:
          </label>
          <input
            type="text"
            id="emergency_email"
            name="emergency_email"
            className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 placeholder-neutral-500 text-neutral-800 outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
            value={emergency_email}
            onChange={onInputChange}
          />
        </div>
        <div className="w-full flex items-end">
          <button className="w-full h-[46px] bg-[#1b418a] p-2.5 rounded-lg text-white text-md">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
