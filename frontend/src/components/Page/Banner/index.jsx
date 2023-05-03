export function Banner() {
  return (
    <div className="">
      <div className="relative pb-52 sm:pb-96 lg:pb-0 lg:h-screen">
        <video
          className="absolute top-0 left-0 w-full object-cover z-10 min-h-full"
          autoPlay
          loop
          muted
        >
          <source
            src="/banner-video/_import_628b44c9dafd83.59799929_FPpreview.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <span className="my-36 xl:m-0" />
      <div
        className={`absolute z-40 top-52 left-1/2 transform -translate-x-1/2 text-5xl text-white`}
      >
        <h1
          className={` absolute z-40 xl:whitespace-nowrap text-5xl sm:text-6xl font-bold text-white mb-7`}
        >
          Club Agronomía Central
        </h1>
        <br />
        <hr className="w-64 border-[#8C4E3B] border-2 mt-40 xl:mt-7" />
        <h3
          className={`absolute z-40 pt-5 mt-4 mb-40 xl:mb-7 text-5xl text-white `}
        >
          Bienvenidos
        </h3>
      </div>
    </div>
  );
}
