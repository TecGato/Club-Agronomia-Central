import React, { useState } from 'react';
import { useFileEncoding } from '@/hooks';

export function FormNews({ showModalForm, handlerCreate, createTestimonial = false }) {
  const { handleFileChange } = useFileEncoding();

  const [post, setPost] = useState({
    title: '',
    picture: '',
    description: '',
  });

  const imagenChange = (event) => {
    handleFileChange(event, setPicture);
  };

  const videoChange = (event) => {
    handleFileChange(event, setVideo);
  };

  const setPicture = (encodedFile) => {
    setPost({
      ...post,
      picture: encodedFile,
    });
  };

  const setVideo = (encodedFile) => {
    setPost({
      ...post,
      video: encodedFile,
    });
  };

  const handlerChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    handlerCreate(post);
    window.location.reload();
  };

  return (
    <div className="flex bg-gray-900/80 backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div class="rounded-xl border bg-gray-50 w-[400px] border-gray-100 p-4 shadow-xl">

        <div className='flex'>
          <button type="button" class="relative text-gray-400 bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={showModalForm}
          >
            <svg ariaHidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <form className="flex flex-col gap-2" onSubmit={handlerSubmit}>
          <label className="text-gray-900 text-lg">Titulo:</label>
          <input
            name="title"
            type="text"
            className="border w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Titulo de la Noticia"
            onChange={handlerChange}
            value={post.title}
          />
          <label className="text-gray-900 text-lg">Imagen:</label>
          <input
            name="picture"
            type="file"
            accept="image/*"
            className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 file:hover:bg-blue-100 cursor-pointer file:cursor-pointer file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 hover:bg-blue"
            placeholder="Url de la imagen"
            onChange={imagenChange}
          />
          {createTestimonial &&
            <>
              <label className="text-gray-900 text-lg">Video:</label>
              <input
                name="video"
                type="file"
                accept="video/*"
                className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 file:hover:bg-blue-100 cursor-pointer file:cursor-pointer file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 hover:bg-blue focus:border-2"
                placeholder="video"
                onChange={videoChange}
              />
            </>
          }
          <label className="text-gray-900 text-lg">Post:</label>
          <input
            name="description"
            type="text"
            className="border w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Contenido de la Noticia"
            onChange={handlerChange}
            value={post.description}
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded w-1/8 self-center "
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}
