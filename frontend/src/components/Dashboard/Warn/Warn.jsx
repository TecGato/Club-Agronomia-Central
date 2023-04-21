export function Warn({ handlerDelete, showModalWarn, showWarn }) {
  return (
    <div className="flex flex-col bg-gray-900/80 backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <p className="text-white">
        ¿Esta Seguro que desea eliminar esta noticia? Esta accion es
        irreversible.
      </p>
      <div>
        <button
          className="bg-[#1b418a] hover:hover:bg-[#10306b] text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            handlerDelete(showWarn);
            showModalWarn();
            window.location.reload();
          }}
        >
          Si
        </button>
        <button
          className="bg-[#1b418a] hover:hover:bg-[#10306b] text-white font-bold py-2 px-4 rounded"
          onClick={() => showModalWarn()}
        >
          No
        </button>
      </div>
    </div>
  );
}
