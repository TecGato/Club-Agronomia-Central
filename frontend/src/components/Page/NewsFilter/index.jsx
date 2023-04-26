import React, { useState } from "react";
import Posts from "@/pages/noticias";

export const NewsFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [newsItems, setNewsItems] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterNewsItems = () => {
    if (searchQuery.trim() === "") {
      return newsItems;
    }

    const filteredItems = newsItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredItems;
  };

  const handleNewsFetch = async () => {
    const newsData = await fetchNews(); // Aquí tendrías que implementar tu función de obtener noticias de una fuente de datos externa

    setNewsItems(newsData);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Últimas noticias</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Buscar noticias..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 rounded-l-md w-full"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
          onClick={handleNewsFetch}
        >
          Actualizar noticias
        </button>
      </div>
      <div>
        {filterNewsItems().map((item) => (
          <Posts key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

