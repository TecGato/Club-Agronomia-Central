import { Layout } from '@/components/Dashboard';
import image from '../../../../public/directives-img/directive.svg';
import Image from 'next/image';
import { useState } from 'react';
import FormDirective from '@/components/Dashboard/Forms/DirectiveForm';

export default function SteeringCommittee({props}) {
  const directives = props;
  const [edit, setEdit] = useState(false);
  const showModalModify = () => {
    setEdit(false);
  };

  return (
    <Layout>
      {directives ? (
        <div className="my-10">
          <div className=" ml-[5%] flex flex-col items-center text-center ">
            <div className=" w-[20%]  bg-white shadow-lg items-center rounded-lg">
              <div className="text-right pt-2 pr-2 ">
                <button onClick={() => setEdit({
                  id: directives[0]._id,
                  name: directives[0].name,
                  position: directives[0].position,
                })}>✏️</button>
              </div>
              <Image src={image} alt={directives[0]?.name} className="h-24 " />
              <h1>{directives[0]?.name}</h1>
              <h2>{directives[0]?.position}</h2>
            </div>
            <div className=" mt-8 w-[20%] bg-white shadow-lg rounded-lg">
              <div className="text-right pt-2 pr-2">
                <button onClick={() => setEdit({
                  id: directives[1]._id,
                  name: directives[1].name,
                  position: directives[1].position,
                })}>✏️</button>
              </div>
              <Image src={image} alt={directives[1]?.name} className="h-24" />
              <h1>{directives[1]?.name}</h1>
              <h2>{directives[1]?.position}</h2>
            </div>
          </div>
          <div className="flex justify-around">
            <div className=" text-center mt-8 w-[20%] bg-white shadow-lg rounded-lg ml-[5%]">
              <div className="text-right pt-2 pr-2">
                <button onClick={() => setEdit({
                  id: directives[2]._id,
                  name: directives[2].name,
                  position: directives[2].position,
                })}>✏️</button>
              </div>
              <Image src={image} alt={directives[2]?.name} className="h-24" />
              <h1>{directives[2]?.name}</h1>
              <h2>{directives[2]?.position}</h2>
            </div>
            <div className=" text-center mt-8 w-[20%] bg-white shadow-lg rounded-lg  ml-[5%]">
              <div className="text-right pt-2 pr-2">
                <button onClick={() => setEdit({
                  id: directives[3]._id,
                  name: directives[3].name,
                  position: directives[3].position,
                })}>✏️</button>
              </div>
              <Image src={image} alt={directives[3]?.name} className="h-24" />
              <h1>{directives[3]?.name}</h1>
              <h2>{directives[3]?.position}</h2>
            </div>
            <div className=" text-center mt-8 w-[20%] bg-white shadow-lg rounded-lg ml-[5%]">
              <div className="text-right pt-2 pr-2">
                <button onClick={() => setEdit({
                  id: directives[4]._id,
                  name: directives[4].name,
                  position: directives[4].position,
                })}>✏️</button>
              </div>
              <Image src={image} alt={directives[4]?.name} className="h-24 " />
              <h1>{directives[4]?.name}</h1>
              <h2>{directives[4]?.position}</h2>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {edit && (
        <FormDirective
          edit={edit}
          showModalModify={showModalModify}
        />
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