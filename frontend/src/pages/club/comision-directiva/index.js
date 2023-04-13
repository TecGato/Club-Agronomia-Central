import React from "react";
import Image from "next/image";
import Presidente from "../../../../public/directiva-img/imagen1.jpg";
export default function SteeringCommittee() {
  const directiva = [
    ["Presidente", "Diego Dottore"],
    ["Vicepresidente", "Hernán Blotta"],
    ["Secretario", "Marcelo Vitar"],
    ["Pro Secretario", "Gustavo Majluf"],
    ["Tesorero", "Pablo Jorge"],
  ];
  return (
    <>
      <div className="my-16">
        <h1 className="text-center text-3xl font-bold ">Comisión Directiva</h1>
      </div>
      <div className="lg:grid grid-cols-4 gap-8 mx-20 ">
        {directiva.map(([cargo, nombre]) => (
          <div class=" max-w-sm mx-auto bg-white shadow-lg mb-10  ">
            <Image
              class=" lg: h-auto"
              src={Presidente}
              alt={nombre}
            />
            <div class="text-center py-4 lg:text-left bg-gray-100">
              <p class="text-lg pb-3 text-black font-bold">{nombre}</p>
              <p class="text-slate-500 font-medium">{cargo}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
