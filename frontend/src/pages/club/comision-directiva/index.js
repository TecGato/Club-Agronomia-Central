import React from "react";
import Image from "next/image";
import Presidente from "../../../../public/directiva-img/imagen1.jpg";
import Vicepresidente from "../../../../public/directiva-img/imagen2.jpg";
import Secretario from "../../../../public/directiva-img/imagen3.jpg";
import ProSecretario from "../../../../public/directiva-img/imagen4.jpg";
import Tesorero from "../../../../public/directiva-img/imagen5.jpg";
import { Layout } from "@/components";
export default function SteeringCommittee() {
  const directiva = [
    ["Presidente", "Diego Dottore", Presidente],
    ["Vicepresidente", "Hernán Blotta", Vicepresidente],
    ["Secretario", "Marcelo Vitar", Secretario],
    ["Pro Secretario", "Gustavo Majluf", ProSecretario],
    ["Tesorero", "Pablo Jorge", Tesorero],
  ];
  return (
    <Layout>
      <div className="my-16">
        <h1 className="text-center text-3xl font-bold ">Comisión Directiva</h1>
      </div>
      <div className="lg:grid grid-cols-4 gap-8 mx-20 ">
        {directiva.map(([cargo, nombre, image]) => (
          <div class=" max-w-sm mx-auto bg-white shadow-lg mb-10  ">
            <Image
              src={image}
              alt={nombre}
            />
            <div class="text-center py-4 lg:text-left bg-gray-100">
              <p class="text-lg pb-3 text-black font-bold">{nombre}</p>
              <p class="text-slate-500 font-medium">{cargo}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
