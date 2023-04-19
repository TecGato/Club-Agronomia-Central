import React from 'react';
import { useState } from 'react';
import {
  initMercadoPago,
  Wallet,
} from '../../../../node_modules/@mercadopago/sdk-react';
import axios from 'axios';

initMercadoPago('TEST-6c23655f-039f-4d68-9ee2-55e0cc334f88');

export function Contributions() {
  const [preferenceId, setPreferenceID] = useState(null);
  const [contribution, setContribution] = useState({ price: null });
  const [isReady, setIsReady] = React.useState(false);

  const handleInput = (e) => {
    setContribution({
      price: e.target.value,
    });
  };

  console.log(contribution);

  const handleClick = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/donation',
        contribution
      );
      console.log(response.data.global);
      setPreferenceID(response.data.global);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnReady = () => {
    setIsReady(true);
  };

  return (
    <div className="h-[400px] my-10 w-96 md:w-4/5 bg-white shadow-md">
      <div className="md:flex h-full w-full ">
        <div className="h-[400px]  md:block relative  bg-[url('https://imgur.com/2hR32WP.jpg')] w-full">
          <img
            className="h-full w-full object-cover"
            src="https://imgur.com/2hR32WP.jpg"
          />
          <div className="m-auto ">
            <p className="absolute top-4 font-semibold text-blue-900 cursor-pointer left-4 text-xs">
              ¡Apoyá a la Juventus con una donación voluntaria! Tu ayuda es
              esencial
            </p>
            <p className="absolute top-8 font-semibold text-blue-900 cursor-pointer left-4 text-xs">
              para continuar brindando programas y actividades deportivas a la
              comunidad.
            </p>
            <p className="absolute top-12 font-semibold text-blue-900 cursor-pointer left-4 text-xs">
              ¡Hacé la diferencia con tu contribución!
            </p>
          </div>
        </div>

        <div className="h-full bg-white shadow-md px-8 pt-6 pb-8 mb-4">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-black">
            Seleccioná el monto de tu donación
          </h3>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  name="price"
                  type="radio"
                  value={1000}
                  onChange={handleInput}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="price"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  $ 1000 pesos
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  name="price"
                  type="radio"
                  value={2000}
                  onChange={handleInput}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="price"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  $ 2000 pesos
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  name="price"
                  type="radio"
                  value={3000}
                  onChange={handleInput}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="price"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  $ 3000 pesos
                </label>
              </div>
            </li>
            <li className="w-full dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  name="price"
                  type="radio"
                  value={4000}
                  onChange={handleInput}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="price"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  $ 4000 pesos
                </label>
              </div>
            </li>
          </ul>

          <div className="mb-6">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Ingresá el monto que deseas donar
            </label>
            <input
              name="price"
              type="number"
              value={contribution.price}
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$ 5000"
            />
          </div>
          <div className="grid justify-items-center">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleClick}
            >
              Donar
            </button>
          </div>

          {preferenceId === null ? null : (
            <Wallet
              initialization={{ preferenceId: preferenceId }}
              onReady={handleOnReady}
            />
          )}
        </div>
      </div>
    </div>
  );
}
