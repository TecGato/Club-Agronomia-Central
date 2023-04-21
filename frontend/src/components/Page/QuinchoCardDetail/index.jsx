export function QuinchoCardDetail(props){

    return(
        <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-solid border-red-300">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <p className="text-1xl font=semibold mr-6">
                            Información del Evento
                        </p>
                        <span class="ml-2 font-medium leading-none truncate">
                        {/* {console.log(props.detail)} */}
                        </span>
                        <button
                            className="bg-transparent border-0 text-black float-right"
                            onClick={() => props.setShowCard(false)}
                        >
                            <span className="text-black opacity-7 h-6 w-6 text-xl block bg-red-400 py-0 rounded-full">
                                {' '}
                                {' '}
                            </span>
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                            <p>Nombre del evento:</p>
                            <p>Fecha del evento:</p>
                            <p>Hora de Inicio:</p>
                            <p>Hora de Finalización:</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}