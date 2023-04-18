import React, { useState } from 'react';
import { useHistories } from '@/hooks';

export default function FormNews() {
  const AddPost = ({ title, image, post }) => {
    setArr([...arr, { title, image, post }]);
  };

  const [showForm, setShowForm] = useState(false);

  const [post, setPost] = useState({
    title: '',
    image: '',
    post: '',
  });

  const handlerChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    AddPost(post);
    setShowForm(false);
    setPost({
      title: '',
      image: '',
      post: '',
    });
  };
  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/4 self-center '
      >
        Button
      </button>
      <form className='flex flex-col'>
        <label>Titulo:</label>
        <input
          name='title'
          type='text'
          className='border-2'
          onChange={handlerChange}
          value={post.title}
        />
        <label>Imagen:</label>
        <input
          name='image'
          type='text'
          className='border-2'
          onChange={handlerChange}
          value={post.image}
        />
        <label>Post:</label>
        <input
          name='post'
          type='text'
          className='border-2'
          onChange={handlerChange}
          value={post.post}
        />
        <button
          type='submit'
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/8 self-center'
          onClick={handlerSubmit}
        >
          Button
        </button>
      </form>
    </div>
  );
}
