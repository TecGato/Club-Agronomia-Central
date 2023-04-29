import React from 'react';

export const Publishing = ({ number, name, tel, img }) => {
  return (
    <article className="w-[48%] lg:w-[32%] h-fit 2xl:w-[20%] bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={img} alt="" />
      <div className='px-2'>
        <p className="text-sm text-neutral-500">Publicidad {number}</p>
        <h3 className="text-lg font-bold">{name}</h3>
        <p>
          <span className="text-lg font-bold">Tel.</span> {tel}
        </p>
      </div>
      <div className="p-2">
        <button className="text-white bg-[#1b418a] w-full py-1 rounded-lg">
          Editar
        </button>
      </div>
    </article>
  );
};
