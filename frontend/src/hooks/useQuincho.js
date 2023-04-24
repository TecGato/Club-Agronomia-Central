import axios from 'axios';

export function useQuincho() {
  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/events/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handlerDelete,
  };
}
