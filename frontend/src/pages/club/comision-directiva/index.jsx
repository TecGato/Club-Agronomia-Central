import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "@/components/Page";
// import Presidente from "../../../../public/directives-img/imagen1.jpg";
// import Vicepresidente from "../../../../public/directives-img/imagen2.jpg";
// import Secretario from "../../../../public/directives-img/imagen3.jpg";
// import ProSecretario from "../../../../public/directives-img/imagen4.jpg";
// import Tesorero from "../../../../public/directives-img/imagen5.jpg";

export default function SteeringCommittee() {
  const [directives, setDirectives] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/api/directors").then((response) => {
      return setDirectives(response.data);
    });
  }, [directives]);

  //   const directives = [
  //       {
  //         name:'Diego Dottore',
  //         position:'Presidente',
  //         picture: Presidente
  //     },
  //       {
  //         position:'Vicepresidente',
  //         name:'Hernán Blotta',
  //         picture: Vicepresidente
  //     },
  //       {
  //         position:'Secretario',
  //         name:'Marcelo Vitar',
  //         picture: Secretario
  //     },
  //       {
  //         position: 'Pro Secretario',
  //         name: 'Gustavo Majluf',
  //         picture: ProSecretario
  //     },
  //       {
  //         position: 'Tesorero',
  //         name: 'Pablo Jorge',
  //         picture: Tesorero
  //     },
  //   ];

  return (
    <Layout
      title={"Comisión Directiva"}
      image={
        "https://img.freepik.com/foto-gratis/reunion-departamento_23-2147626530.jpg?w=996&t=st=1681513108~exp=1681513708~hmac=eb17a71ffb76874c81f1199abbfe9cef4f0b1e4e4b7c07ea8c72ea9cc0604b0e"
      }
    >
      <div className="lg:grid grid-cols-4 gap-8 py-10 px-5 lg:px-0 ">
        {directives?.map((d) => {
          return (
            <div class=" max-w-sm mx-auto bg-white shadow-lg mb-10  ">
              <img src={d.picture} alt={d.name} className="lg:h-52 lg:w-52" />
              <div class="text-center py-4 lg:text-left lg: pl-2 bg-gray-100">
                <p class="text-lg pb-3 text-black font-bold">{d.name}</p>
                <p class="text-slate-500 font-medium">{d.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
