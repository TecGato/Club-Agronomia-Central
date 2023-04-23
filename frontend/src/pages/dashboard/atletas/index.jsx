import { Layout } from '@/components/Dashboard';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

// const localization = new Localization(esES);

const columns = [
  { field: 'name', headerName: 'Nombre', width: 130 },
  { field: 'discipline', headerName: 'Disciplina', width: 130 },
  { field: 'email', headerName: 'Correo Electronico', width: 130 },
  {
    field: 'contacto',
    headerName: 'Numero de contacto',
    type: 'number',
    width: 200,
  },
  {
    field: 'emergency',
    headerName: 'Contacto de emergencia',
    type: 'number',
    width: 200,
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
  {
    id: 10,
    name: 'Gon Doe',
    discipline: 'Futbol',
    email: 'XXXXX@gmail.com',
    contacto: '123456789',
    emergency: '123456789',
  },
];

export default function Atlethes() {
  return (
    <Layout>
      <section
        className={`w-full min-h-screen flex flex-col justify-self-center justify-center items-center xl:w-11/12 sm:w-5/6 `}
      >
        <div className="w-full flex justify-start">
          <h2 className="text-start text-2xl font-semibold">
            Todos los atletas
          </h2>
        </div>
        <article className="lg:w-full xl:w-full flex flex-col justify-start  items-start gap-2 border bg-white border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg ">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={1}
            rowsPerPageOptions={[1]}
            checkboxSelection
            localeText={{
              filterPanelColumns: 'Columnas',
              filterPanelOperator: 'Operador',
              filterPanelInputLabel: 'Valor',
              filterPanelInputPlaceholder: 'Valor a buscar',
              filterOperatorContains: 'Contiene',
              filterOperatorEquals: 'Es Igual a',
              filterOperatorStartsWith: 'Empieza con',
              filterOperatorEndsWith: 'Termina con',
              filterOperatorIsEmpty: 'Esta vacio',
              filterOperatorIsNotEmpty: 'No esta vacio',
              filterOperatorIsAnyOf: 'Cualquiera que',
              columnMenuLabel: 'Menu',
              columnMenuShowColumns: 'Mostrar columnas',
              columnMenuManageColumns: 'Manejar columnas',
              columnMenuFilter: 'Filtrar',
              columnMenuHideColumn: 'Ocultar Columna',
              columnMenuUnsort: 'Desordenar',
              columnMenuSortAsc: 'Ordenar A-Z',
              columnMenuSortDesc: 'Ordenar Z-A',
            }}
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </article>
      </section>
    </Layout>
  );
}
