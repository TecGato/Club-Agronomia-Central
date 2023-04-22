import React, {useState} from "react";
import axios from "axios";
export default function FormDirective ({ edit, showModalModify }) {
    const handlerModify = async (props) => {
        try {
          const { data } = await axios.put(
            `http://localhost:3001/api/directors/${props.id}`,
            props
          );
          console.log(data.msg);
        } catch (error) {
          console.log(error);
        }
      };
    const [props, setProps] = useState(edit);
    console.log(props);
    const handlerChange = (event) => {
        setProps({
          ...props,
          [event.target.name]: event.target.value,
        });
      };
    
      const handlerSubmit = async (event) => {
        event.preventDefault();
        handlerModify(props);
        window.location.reload();
      };
    return (
        <div className="flex bg-gray-900/80 backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <button
        onClick={showModalModify}
        className="absolute top-4 right-6 p-2 text-white rounded-xl w-7 h-7 place-content-center"
      >
        ❌
      </button>
      <form className="flex flex-col gap-2" onSubmit={handlerSubmit}>
        <label className="text-white text-lg">Nombre:</label>
        <input
          name="name"
          type="text"
          className="border-2 pl-1"
          placeholder="Nombre"
          onChange={handlerChange}
          value={props.name}
        />
        <label className="text-white text-lg">Cargo:</label>
        <label className="text-white text-lg">{props.position}</label>
        
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-1/8 self-center "
        >
          Aceptar
        </button>
      </form>
    </div>
    )
}