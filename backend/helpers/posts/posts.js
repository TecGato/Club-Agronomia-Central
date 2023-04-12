const getAllPosts = async () => {
  try {
    const allPosts = await "CREAR MODELO Y CONECTAR";
    return allPosts;
  } catch (error) {
    console.error(error.message);
  }
};

const getPostByName = async (name) => {
  try {
    const post = await "CREAR MODELO Y CONECTAR";
    return post;
  } catch (error) {
    console.error(error.message);
  }
};

const getPostById = async (id) => {
  try {
    const post = await "CREAR MODELO Y CONECTAR";
    return post;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAllPosts, getPostByName, getPostById };
