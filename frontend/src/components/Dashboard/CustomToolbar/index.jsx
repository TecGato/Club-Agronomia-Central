import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';

export const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <div className='w-full flex justify-between'>
        <div>
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </div>
        <button className="h-[36px] bg-[#1b418a] p-2.5 rounded-lg text-white text-md leading-none">
          AÑADIR ATLETA
        </button>
      </div>
    </GridToolbarContainer>
  );
};
