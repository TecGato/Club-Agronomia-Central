import { useState } from "react";

export function InfoSlider({ images }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <section>
                <div
                    className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 "
                >
                    <div
                        className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16"
                    >
                        <div className="max-w-xl text-center sm:text-left">
                            <h2 className="italic text-3xl font-bold tracking-tight sm:text-4xl">
                                Centro de Entrenamiento y 
                                <br/>
                                Readaptación Deportiva.
                            </h2>

                            <p className="mt-4 text-gray-500">
                                Atenea Sports es un espacio dedicado al entrenamiento, la readaptación deportiva y la rehabilitación de lesiones. Desde una concepción integral y funcional de la persona, nuestro objetivo es ayudar a la persona a alcanzar su mejor versión, teniendo en cuenta sus objetivos, posibilidades y necesidades. Cada sesión, cada trabajo y cada ejercicio está pensado por nuestros profesionales para que vivas el deporte, el ejercicio y la actividad física con la misma calidad que lo hacen los profesionales. #EntrenaDistinto #RehabilitateMejor 😀
                            </p>

                            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                                <button
                                    onClick={prevSlide}
                                    className="prev-button rounded-full border border-blue-900 p-3 text-blue-900 hover:bg-blue-900 hover:text-white"
                                >
                                    <span className="sr-only">Previous Slide</span>
                                    <svg
                                        className="h-5 w-5 -rotate-180 transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="next-button rounded-full border border-blue-900 p-3 text-blue-900 hover:bg-blue-900 hover:text-white"
                                >
                                    <span className="sr-only">Next Slide</span>
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>






                        <div className="-mx-6 lg:col-span-2 lg:mx-0">
                            <div className="shadow-[10px_10px_0px_#1e3a8a] max-w-[70%] h-[500px] w-full m-auto relative">
                                <div style={{ backgroundImage: `url(${images[currentIndex].src})` }} className="w-full h-full bg-center bg-cover duration-500">
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className="mt-8 flex justify-center gap-4 lg:hidden">
                        <button
                            onClick={prevSlide}
                            aria-label="Previous slide"
                            className="prev-button rounded-full border border-blue-900 p-4 text-blue-900 hover:bg-blue-900 hover:text-white"
                        >
                            <svg
                                className="h-5 w-5 -rotate-180 transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 5l7 7-7 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            aria-label="Next slide"
                            className="next-button rounded-full border border-blue-900 p-4 text-blue-900 hover:bg-blue-900 hover:text-white"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 5l7 7-7 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};