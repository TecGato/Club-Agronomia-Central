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
              <Image src={image} alt={directives[0]?.name} className="h-24 " />
              <h1>{directives[0]?.name}</h1>
              <h2>{directives[0]?.position}</h2>
              <div className="text-center py-2">
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                    setEdit({
                      id: directives[0]._id,
                      name: directives[0].name,
                      position: directives[0].position,
                    });
                }}
            >
                Editar
                <svg
                    className='ml-2'
                    width="30px"
                    height="30px"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    strokeWidth="0.00024000000000000003"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
                            fill="#ffffff"
                        >
                        </path>
                    </g>
                </svg>
            </button>
              </div>
            </div>
            <div className=" mt-8 w-[20%] bg-white shadow-lg rounded-lg">
              <Image src={image} alt={directives[1]?.name} className="h-24" />
              <h1>{directives[1]?.name}</h1>
              <h2>{directives[1]?.position}</h2>
              <div className="text-center py-2">
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                    setEdit({
                      id: directives[1]._id,
                      name: directives[1].name,
                      position: directives[1].position,
                    });
                }}
            >
                Editar
                <svg
                    className='ml-2'
                    width="30px"
                    height="30px"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    strokeWidth="0.00024000000000000003"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
                            fill="#ffffff"
                        >
                        </path>
                    </g>
                </svg>
            </button>
              </div>
            </div>
          </div>
          <div className="flex justify-around">
            <div className=" text-center mt-8 w-[20%] bg-white shadow-lg rounded-lg ml-[5%]">
              <Image src={image} alt={directives[2]?.name} className="h-24" />
              <h1>{directives[2]?.name}</h1>
              <h2>{directives[2]?.position}</h2>
              <div className="text-center py-2">
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                    setEdit({
                      id: directives[2]._id,
                      name: directives[2].name,
                      position: directives[2].position,
                    });
                }}
            >
                Editar
                <svg
                    className='ml-2'
                    width="30px"
                    height="30px"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    strokeWidth="0.00024000000000000003"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
                            fill="#ffffff"
                        >
                        </path>
                    </g>
                </svg>
            </button>
              </div>
            </div>
            <div className=" text-center mt-8 w-[20%] bg-white shadow-lg rounded-lg  ml-[5%]">
              <Image src={image} alt={directives[3]?.name} className="h-24" />
              <h1>{directives[3]?.name}</h1>
              <h2>{directives[3]?.position}</h2>
              <div className="text-center py-2">
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                    setEdit({
                      id: directives[3]._id,
                      name: directives[3].name,
                      position: directives[3].position,
                    });
                }}
            >
                Editar
                <svg
                    className='ml-2'
                    width="30px"
                    height="30px"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    strokeWidth="0.00024000000000000003"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
                            fill="#ffffff"
                        >
                        </path>
                    </g>
                </svg>
            </button>
              </div>
            </div>
            <div className=" text-center mt-8 w-[20%] bg-white shadow-lg rounded-lg ml-[5%]">
              <Image src={image} alt={directives[4]?.name} className="h-24 " />
              <h1>{directives[4]?.name}</h1>
              <h2>{directives[4]?.position}</h2>
              <div className="text-center py-2">
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                    setEdit({
                      id: directives[4]._id,
                      name: directives[4].name,
                      position: directives[4].position,
                    });
                }}
            >
                Editar
                <svg
                    className='ml-2'
                    width="30px"
                    height="30px"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    strokeWidth="0.00024000000000000003"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
                            fill="#ffffff"
                        >
                        </path>
                    </g>
                </svg>
            </button>
              </div>
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