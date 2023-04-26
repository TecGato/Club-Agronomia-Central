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

const rows = [
  {
    id: 1,
    name: 'Aon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contact: '123456789',
    contact_phone: '123456789',
    contact_name: 'margarita rosa',
    contact_email: 'emergencia@email.com',
  },
  {
    id: 2,
    name: 'Bon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contact: '123456789',
    contact_phone: '123456789',
    contact_name: 'margarita rosa',
    contact_email: 'emergencia@email.com',
  },
  {
    id: 3,
    name: 'Con Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contact: '123456789',
    contact_phone: '123456789',
    contact_name: 'margarita rosa',
    contact_email: 'emergencia@email.com',
  },
  {
    id: 4,
    name: 'Don Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contact: '123456789',
    contact_phone: '123456789',
    contact_name: 'margarita rosa',
    contact_email: 'emergencia@email.com',
  },
  {
    id: 5,
    name: 'Eon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contact: '123456789',
    contact_phone: '123456789',
    contact_name: 'margarita rosa',
    contact_email: 'emergencia@email.com',
  },
  {
    id: 6,
    name: 'Fon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contact: '123456789',
    contact_phone: '123456789',
    contact_name: 'margarita rosa',
    contact_email: 'emergencia@email.com',
  },
  {
    id: 7,
    name: 'Gon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contact: '123456789',
    contact_phone: '123456789',
    contact_name: 'margarita rosa',
    contact_email: 'emergencia@email.com',
  },
  {
    id: 8,
    name: 'Gon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contact: '123456789',
    contact_phone: '123456789',
    contact_name: 'margarita rosa',
    contact_email: 'emergencia@email.com',
  },
  {
    id: 9,
    name: 'Gon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contact: '123456789',
    contact_phone: '123456789',
    contact_name: 'margarita rosa',
    contact_email: 'emergencia@email.com',
  },
];

export default function Atlethes() {
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
      field: 'contact_name',
      headerName: 'Nombre Contacto de emergencia',
      type: 'number',
      width: 170,
    },
    {
      field: 'contact_phone',
      headerName: 'Numero de emergencia',
      type: 'number',
      width: 170,
      editable: true,
    },
    {
      field: 'contact_email',
      headerName: 'Correo de emergencia',
      type: 'number',
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
          <button onClick={() => setCreateModal(true)} className="h-[36px] bg-[#1b418a] flex items-center p-2.5 rounded-lg text-white text-md leading-none">
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
        <article className="flex flex-col gap-2 border bg-white border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg max-w-full h-2/3">
          <DataGrid
            rows={rows}
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
