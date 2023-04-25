import React, { useState } from 'react';
import axios from 'axios';
export default function FormDirective({ edit, showModalModify }) {
  const handlerModify = async (props) => {
    try {
      const { data } = await axios.put(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/directors/${props.id}`,
        props
      );
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const [props, setProps] = useState(edit);
  const handlerChange = (event) => {
    setProps({
      ...props,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    handlerModify(props);
    showModalModify()
  };
  return (
    <div className="flex bg-gray-900/80 backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="rounded-xl border bg-gray-50 w-[400px] border-gray-100 p-4 shadow-xl">
        <div className="flex">
          <button
            type="button"
            className="relative text-gray-400 bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={showModalModify}
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
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handlerSubmit}>
          <label className="text-gray-900 text-lg">Nombre:</label>
          <input
            name="name"
            type="text"
            className="border w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Nombre"
            onChange={handlerChange}
            value={props.name}
          />
          <label className="text-gray-900 text-lg">Cargo:</label>
          <label className="text-gray-900 text-lg">{props.position}</label>

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded w-1/8 self-center"
          >
            Modificar
          </button>
        </form>
      </div>
    </div>
  );
}
