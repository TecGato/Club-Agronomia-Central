import axios from 'axios';

export function useNews() {
  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/api/posts/${id}`
      );
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerCreate = async (post) => {
    console.log(post);
    try {
      const { data } = await axios.post(
        `http://localhost:3001/api/posts`,
        post
      );
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handlerDelete,
    handlerCreate,
  };
}
