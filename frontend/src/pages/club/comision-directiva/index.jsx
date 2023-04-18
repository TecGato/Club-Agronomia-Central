import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Layout } from "@/components/Page";
import image from "../../../../public/directives-img/directive.svg";


export default function SteeringCommittee() {
  const [directives, setDirectives] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/api/directors").then((response) => {
      return setDirectives(response.data);
    });
  }, [directives]);

    // const directives = [
    //     {
    //       name:'Diego Dottore',
    //       position:'Presidente',
    //   },
    //     {
    //       position:'Vicepresidente',
    //       name:'Hernán Blotta',
    //   },
    //     {
    //       position:'Secretario',
    //       name:'Marcelo Vitar',
    //   },
    //     {
    //       position: 'Pro-Secretario',
    //       name: 'Gustavo Majluf',
    //   },
    //     {
    //       position: 'Tesorero',
    //       name: 'Pablo Jorge',
    //   },
    // ];

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
              <Image src={image} alt={d.name} className="lg:h-32"  />
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
