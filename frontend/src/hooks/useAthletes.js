import axios from 'axios';

export function useAthletes() {
  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/api/athletes/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handlerCreate = async (athlete) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/api/athletes`,
        athlete
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handlerModify = async (athlete) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3001/api/athletes/${athlete.id}`,
        athlete
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
