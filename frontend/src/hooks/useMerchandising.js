import axios from "axios";

export  function useMerchandising() {
    const handlerDelete = async (id) => {
        try {
          await axios.delete(
            `http://localhost:3001/api/products/${id}`
          );
        } catch (error) {
          console.log(error);
        }
      };
    
      const handlerCreate = async (product) => {
        try {
          const { data } = await axios.post(
            `http://localhost:3001/api/products`,
            product
          );
          console.log(data.msg);
        } catch (error) {
          console.log(error);
        }
      };
    
      const handlerModify = async (post) => {
        try {
          const { data } = await axios.put(
            `http://localhost:3001/api/products/${post.id}`,
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