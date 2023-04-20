import React, { useState } from 'react';

export function FormNews({ showModalForm, handlerCreate }) {
  //   const AddPost = ({ title, image, post }) => {
  //     setArr([...arr, { title, image, post }]);
  //   };

  //   const [showForm, setShowForm] = useState(false);

  const [post, setPost] = useState({
    title: '',
    picture: '',
    description: '',
  });

  const handlerChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log('gatito');
    showModalForm();
    //     AddPost(post);
    //     setShowForm(false);
    //     setPost({
    //       title: '',
    //       image: '',
    //       post: '',
    //     });
  };
  return (
    <div className="flex bg-gray-900/80 backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <button
        onClick={showModalForm}
        className="absolute top-4 right-6 p-2 text-white rounded-xl w-7 h-7 place-content-center"
      >
        ❌
      </button>
      <form
        className="flex flex-col gap-2"
        onSubmit={() => {
          handlerCreate(post);
        }}
      >
        <label className="text-white text-lg">Titulo:</label>
        <input
          name="title"
          type="text"
          className="border-2"
          placeholder="Titulo de la Noticia"
          onChange={handlerChange}
          value={post.title}
        />
        <label className="text-white text-lg">Imagen:</label>
        <input
          name="picture"
          type="text"
          className="border-2"
          placeholder="Url de la imagen"
          onChange={handlerChange}
          //   value={post.image}
        />
        <label className="text-white text-lg">Post:</label>
        <input
          name="description"
          type="text"
          className="border-2"
          placeholder="Contenido de la Noticia"
          onChange={handlerChange}
          value={post.post}
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/8 self-center "
        >
          Button
        </button>
      </form>
    </div>
  );
}
