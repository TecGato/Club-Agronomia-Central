import axios from 'axios';

export function useAds() {
  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/api/ads/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handlerCreate = async (ad) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/api/ads`,
        ad
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handlerModify = async (ad) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3001/api/ads/${ad.id}`,
        ad
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handlerDelete,
    handlerCreate,
    handlerModify,
  };
}
