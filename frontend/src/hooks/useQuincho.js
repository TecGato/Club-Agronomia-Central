import axios from 'axios';

export function useQuincho() {
  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/api/events/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handlerDelete,
  };
}
