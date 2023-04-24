import axios from 'axios';

export function useNews() {
  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/posts/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handlerCreate = async (post) => {
    try {
      const { data } = await axios.post(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/posts`,
        post
      );
      console.log(data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerModify = async (post) => {
    try {
      const { data } = await axios.put(
        `http://ec2-3-15-46-181.us-east-2.compute.amazonaws.com:3001/api/posts/${post.id}`,
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
    handlerModify,
  };
}
