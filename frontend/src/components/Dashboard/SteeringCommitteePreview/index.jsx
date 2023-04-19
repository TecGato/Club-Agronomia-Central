import { Administrative } from '..';

export const SteeringCommitteePreview = ({
  president,
  vicePresident,
  secretary,
  proSecretary,
  treasurer,
}) => {
  return (
    <>
      <div className="w-full col-span-2 min-h-[192px] sm:h-[200px] sm:w-[250px] lg:w-full xl:w-full flex flex-col justify-start  items-start gap-4 border bg-white border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg xl:col-span-1 xl:col-start-4 xl:row-start-3 xl:h-full">
        <p className="text-lg text-center text-[#262626] font-medium">
          Comision directiva
        </p>
        <div className="w-full grid grid-cols-2 gap-2 xl:grid-cols-1 xl:overflow-y-auto">
          <Administrative name={'Diego Dottore'} position={'Presidente'} />
          <Administrative name={'Hernán Blotta'} position={'Vicepresidente'} />
          <Administrative name={'Marcelo Vitar'} position={'Secretario'} />
          <Administrative name={'Gustavo Majluf'} position={'Pro-Secretario'} />
          <Administrative name={'Pablo Jorge'} position={'Tesorero'} />
        </div>
      </div>
    </>
  );
};
