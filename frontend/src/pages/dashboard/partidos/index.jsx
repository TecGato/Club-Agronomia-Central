import { Layout } from '@/components/Dashboard';
import MatchesForm from '@/components/Dashboard/Forms/MatchesForm';
import { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


export default function Matches({data}) {


    const columns = [
        { field: 'name', headerName: 'Nombre del Encuentro', width: 130 },
        { field: 'date', headerName: 'Fecha', width: 130 },
        { field: 'home_team', headerName: 'Equipo Local', width: 130 },
        { field: 'away_team', headerName: 'Equipo Visitante', width: 130 },
        { field: 'discipline', headerName: 'Disciplina', width: 130 },

    ];



    const rows = []

    data.map((match)=>{
        rows.push(match)
    })

    /*

      */


    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    });

    const onEdit = (selectionModel) => {
    // console.log(selectionModel);
    // console.log('dw');
    };


    //Declare an initial state of the form modal in matches
    const[showModalMatches, setShowModalMatches]= useState(false);

    return (
        <Layout>
            <div>



            <section
            className={`w-full min-h-screen flex flex-col justify-self-center justify-center items-center xl:w-11/12 sm:w-5/6 `}
            >
                <article class="flex items-center mb-2">
                <h1 className="text-5xl font-bold text-center">Encuentros del Club</h1>
                    <button
                        className="bg-blue-900 text-white active:bg-blue-500 font-bold px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-3"
                        type="button"
                        onClick={() => setShowModalMatches(true)}
                        >
                    Crear nuevo encuentro
                    </button>
                </article>
                <article className="flex flex-col gap-2 border bg-white border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg max-w-full h-2/3">
                <DataGrid
                    rows={rows}
                    getRowId={(row) => row._id}
                    columns={columns}
                    slots={{
                    toolbar: GridToolbar,
                    }}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[5, 10, 25]}
                    checkboxSelection
                    onRowSelectionModelChange={onEdit}
                    disableMultipleRowSelection
                />
                </article>
            </section>
            </div>
            {showModalMatches?(
                <MatchesForm
                    showModalMatches={showModalMatches}
                    setShowModalMatches={setShowModalMatches}
                />
            ):null}
        </Layout>
    );
}



export async function getStaticProps() {
    try {
    const res = await fetch('http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/matches');
    const data = await res.json();


    return {
    props: { data: data },
    };
    } catch (error) {
      return { error: error.message };
    }
  }