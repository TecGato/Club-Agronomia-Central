import { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Layout } from '@/components/Dashboard';

const columns = [
  { field: 'name', headerName: 'Nombre', width: 130 },
  { field: 'discipline', headerName: 'Disciplina', width: 130 },
  { field: 'email', headerName: 'Correo Electronico', width: 130 },
  {
    field: 'contacto',
    headerName: 'Numero de contacto',
    type: 'number',
    width: 170,
  },
  {
    field: 'emergency',
    headerName: 'Contacto de emergencia',
    type: 'number',
    width: 170,
  },
  {
    field: 'emergency_name',
    headerName: 'Nombre Contacto de emergencia',
    type: 'number',
    width: 170,
  },
];

const rows = [
  {
    id: 1,
    name: 'Aon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contacto: '123456789',
    emergency: '123456789',
  },
  {
    id: 2,
    name: 'Bon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contacto: '123456789',
    emergency: '123456789',
  },
  {
    id: 3,
    name: 'Con Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contacto: '123456789',
    emergency: '123456789',
  },
  {
    id: 4,
    name: 'Don Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contacto: '123456789',
    emergency: '123456789',
  },
  {
    id: 5,
    name: 'Eon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contacto: '123456789',
    emergency: '123456789',
  },
  {
    id: 6,
    name: 'Fon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contacto: '123456789',
    emergency: '123456789',
  },
  {
    id: 7,
    name: 'Gon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contacto: '123456789',
    emergency: '123456789',
  },
  {
    id: 8,
    name: 'Gon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contacto: '123456789',
    emergency: '123456789',
  },
  {
    id: 9,
    name: 'Gon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contacto: '123456789',
    emergency: '123456789',
  },
];

export default function Atlethes() {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  return (
    <Layout>
      <section
        className={`w-full min-h-screen flex flex-col justify-self-center justify-center items-center xl:w-11/12 sm:w-5/6 `}
      >
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
            checkboxSelection
            disableMultipleRowSelection={true}
          />
        </article>
      </section>
    </Layout>
  );
}
