import { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  CreateAthlete,
  EditAthlete,
  Layout,
  ModalTable,
  TableActions,
} from '@/components/Dashboard';
import { useTableActions } from '@/hooks';

export default function Atlethes({athletes}) {
  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const { row, handleDelete, handleUpdate } = useTableActions(setEditModal);

  const columns = [
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'discipline', headerName: 'Disciplina', width: 130 },
    { field: 'email', headerName: 'Correo Electronico', width: 150 },
    {
      field: 'contact',
      headerName: 'Numero de Contacto',
      type: 'number',
      width: 170,
    },
    {
      field: 'emergency_name',
      headerName: 'Nombre Contacto de emergencia',
      type: 'number',
      width: 170,
    },
    {
      field: 'emergency_phone',
      headerName: 'Numero de emergencia',
      type: 'number',
      width: 170,
      editable: true,
    },
    {
      field: 'emergency_email',
      headerName: 'Correo de emergencia',
      type: 'number',
      width: 170,
    },
    {
      field: 'date_of_birth',
      headerName: 'Fecha de nacimiento',
      width: 170,
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      type: 'actions',
      width: 150,
      renderCell: (params) => (
        <TableActions
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          {...params}
        />
      ),
    },
  ];
  return (
    <Layout>
      <section
        className={`w-full min-h-screen flex flex-col justify-self-center justify-center items-center xl:w-11/12 sm:w-5/6 `}
      >
        <article className="flex xl:gap-6 items-center">
          <h1 className="text-5xl text-neutral-800 font-bold text-center">
            Administrar todos los atletas
          </h1>
          <button
            onClick={() => setCreateModal(true)}
            className="h-[36px] bg-[#1b418a] flex items-center p-2.5 rounded-lg text-white text-md leading-none"
          >
            <svg
              fill="#ffffff"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g dataName="Layer 2">
                  <g dataName="person-add">
                    <rect width="24" height="24" opacity="0"></rect>
                    <path d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z"></path>
                    <path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path>
                    <path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"></path>
                  </g>
                </g>
              </g>
            </svg>
            AÑADIR ATLETA
          </button>
        </article>
        <article className="xl:max-w-5xl flex flex-col gap-2 border bg-white border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg h-2/3">
          <DataGrid
            rows={athletes}
            columns={columns}
            slots={{
              toolbar: GridToolbar,
            }}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10, 25]}
            checkboxSelection={false}
            disableRowSelection={true}
          />
        </article>
      </section>
      {editModal && (
        <ModalTable>
          <EditAthlete row={row} setEditModal={setEditModal} />
        </ModalTable>
      )}
      {createModal && (
        <ModalTable>
          <CreateAthlete setCreateModal={setCreateModal} />
        </ModalTable>
      )}
    </Layout>
  );
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/api/athletes');
  const athletes = await res.json();
  return {
    props: {
      athletes,
    },
    revalidate: 3600,
  };
}