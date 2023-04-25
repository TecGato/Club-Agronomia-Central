import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Layout } from "@/components/Page";
import image from "../../../../public/directives-img/directive.svg";

export default function SteeringCommittee({props}) {
  const [directives, setDirectives] = useState();
  useEffect(() => {
    return setDirectives(props);
    ;
  }, [directives]);

  return (
    <Layout
      title={"Comisión Directiva"}
      image={
        "https://img.freepik.com/foto-gratis/reunion-departamento_23-2147626530.jpg?w=996&t=st=1681513108~exp=1681513708~hmac=eb17a71ffb76874c81f1199abbfe9cef4f0b1e4e4b7c07ea8c72ea9cc0604b0e"
      }
    >
      {directives ? (
        <div className="my-10 dark:bg-slate-800">
          <div className=" ml-[5%] flex flex-col items-center text-center ">
            <div className=" w-[40%] lg:w-[20%] bg-white shadow-lg items-center rounded-lg">
              <Image src={image} className="h-24 "/>
              <h1>{directives[0]?.name}</h1>
              <h2>{directives[0]?.position}</h2>
            </div>
            <div className=" mt-8 w-[40%] lg:w-[20%] bg-white shadow-lg text-center rounded-lg">
            <Image src={image} className="h-24"/>
              <h1>{directives[1]?.name}</h1>
              <h2>{directives[1]?.position}</h2>
            </div>
          </div>
          <div className="flex justify-around">
          <div className=" text-center mt-8 w-[30%] lg:w-[20%] bg-white shadow-lg rounded-lg">
          <Image src={image} className="h-24"/>
            <h1>{directives[2]?.name}</h1>
            <h2>{directives[2]?.position}</h2>
          </div>
          <div className=" text-center mt-8 w-[30%] lg:w-[20%] bg-white shadow-lg rounded-lg ">
          <Image src={image} className="h-24"/>
            <h1>{directives[3]?.name}</h1>
            <h2>{directives[3]?.position}</h2>
          </div>
          <div className=" text-center mt-8 w-[30%] lg:w-[20%] bg-white shadow-lg rounded-lg">
          <Image src={image} className="h-24 "/>
            <h1>{directives[4]?.name}</h1>
            <h2>{directives[4]?.position}</h2>
          </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/directors');
  const props = await res.json();
  return {
    props: {
      props
    },
  revalidate: 3600,
}
    
}