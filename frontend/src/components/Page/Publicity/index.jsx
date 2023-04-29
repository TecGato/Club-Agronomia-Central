import { useState, useEffect } from 'react';

const items = [
    {
        image: "https://img.freepik.com/foto-gratis/pastel-delicioso-dulce-fresas-baiser-plato_181624-29179.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph",
        title: "Tortas Lolita",
        contact: "Tel. 99959995"
    },
    {
        image: "https://img.freepik.com/foto-gratis/hermosa-chica-cabello-negro-chaqueta-vaquera-decorada_197531-7370.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph",
        title: "Tortas Lolita",
        contact: "Tel. 99959995"
    },
    {
        image: "https://img.freepik.com/fotos-premium/refresco-cola-vaso-sobre-mesa-blanca_51137-1798.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais",
        title: "Tortas Lolita",
        contact: "Tel. 99959995"
    },
    {
        image: "https://img.freepik.com/fotos-premium/pan-muerto-sobre-fondo-azul-comida-tipica-mexicana-celebracion-dia-muertos-copie-espacio-vista-superior_58797-1826.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph",
        title: "Tortas Lolita",
        contact: "Tel. 99959995"
    },
    {
        image: "https://img.freepik.com/foto-gratis/zapatos-tacon-alto_1203-8674.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph",
        title: "Tortas Lolita",
        contact: "Tel. 99959995"
    }
]

export function Publicity() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedItem = items[selectedIndex];
    const nextIndex = (selectedIndex + 1) % items.length;
    const nextItem = items[nextIndex];
    const secondNextIndex = (nextIndex + 1) % items.length;
    const secondNextItem = items[secondNextIndex];
    const thirdNextIndex = (secondNextIndex + 1) % items.length;
    const thirdNextItem = items[thirdNextIndex];

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSelectedIndex((selectedIndex) => (selectedIndex + 1) % items.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }, [items]);
  
    return (
      <div className="z-10 m-4 p-5 flex flex-wrap justify-center">
        <div className="shadow-lg justify-center md:my-5 mx-1 relative">
            <div className='w-56 h-36 overflow-hidden'>
                <img
                    src={selectedItem.image}
                    className="rounded-lg"
                    alt={selectedItem.title}
                />
            </div>
            <div className='absolute bottom-0 right-0 rounded-tl-lg bg-gray-100 p-2'>
                <h3 className="text-xs text-center font-bold text-gray-800">{selectedItem.title}</h3>
                <p className="text-center text-xs text-gray-700 leading-6">{selectedItem.contact}</p>
            </div>
        </div>
  
        <div className="shadow-lg md:my-5 mx-1 relative">
            <div className='w-56 h-36 overflow-hidden'>
                <img
                    src={nextItem.image}
                    className="rounded-lg"
                    alt={nextItem.title}
                />
            </div>

            <div className='absolute bottom-0 right-0 rounded-tl-lg bg-gray-100 p-2'>
                <h3 className="text-xs text-center font-bold text-gray-800">{nextItem.title}</h3>
                <p className="text-center text-xs text-gray-700 leading-6">{nextItem.contact}</p>
            </div>
        </div>

        <div className="shadow-lg md:my-5 mx-1 relative">
            <div className='w-56 h-36 overflow-hidden'>
                <img
                    src={secondNextItem.image}
                    className="rounded-lg"
                    alt={secondNextItem.title}
                />
            </div>

            <div className='absolute bottom-0 right-0 rounded-tl-lg bg-gray-100 p-2'>
                <h3 className="text-xs text-center font-bold text-gray-800">{secondNextItem.title}</h3>
                <p className="text-center text-xs text-gray-700 leading-6">{secondNextItem.contact}</p>
            </div>
        </div>

        <div className="shadow-lg md:my-5 mx-1 relative">
            <div className='w-56 h-36 overflow-hidden'>
                <img
                    src={thirdNextItem.image}
                    className="rounded-lg"
                    alt={thirdNextItem.title}
                />
            </div>

            <div className='absolute bottom-0 right-0 rounded-tl-lg bg-gray-100 p-2'>
                <h3 className="text-xs text-center font-bold text-gray-800">{thirdNextItem.title}</h3>
                <p className="text-center text-xs text-gray-700 leading-6">{thirdNextItem.contact}</p>
            </div>
        </div>
      </div>
    );
  }