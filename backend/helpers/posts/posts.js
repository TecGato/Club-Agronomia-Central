const getAllPosts = async () => {
  try {
    const allPosts = await "CREAR MODELO Y CONECTAR";
    return allPosts;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAllPosts };
