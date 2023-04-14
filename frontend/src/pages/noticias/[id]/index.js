import React from "react";
import Image from "next/image";

export default function Post() {
  return (
    <div>
      {/* ---------------------- POST ----------------------- */}
      <div className="mt-6 max-w-md  mx-auto bg-white  shadow-md overflow-hidden lg:max-w-6xl cursor-pointer hover:scale-105 transition ease-in-out">
        <div className="lg:flex">
          <div className="lg:shrink-0">
            <Image
              className="h-full lg:w-64"
              src={""}
              alt="Foto de la noticia"
            />
          </div>
          <div className="p-8">
            <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
              ¡EXTRA, EXTRA!
            </div>
            <p className="block mt-6 text-lg leading-tight font-medium text-black">
              ¿Te enterás de lo que ocurre en nuestro club?
            </p>
            <p className="mt-6 text-slate-500 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              malesuada nibh. Nulla nec quam vitae ligula vestibulum pharetra.
              Phasellus vel lobortis libero, quis pretium ligula. Duis iaculis
              purus id metus sollicitudin, vitae venenatis lacus sollicitudin.
              Morbi suscipit dui non aliquet tincidunt. Integer lobortis
              facilisis mi, venenatis pulvinar dolor commodo quis. Curabitur
              tempor dolor ac dui blandit tristique. Suspendisse non ligula
              massa. Mauris sollicitudin nibh felis, vel dictum elit imperdiet
              non.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
