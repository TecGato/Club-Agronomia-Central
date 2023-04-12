const getAllTestimonials = async () => {
  try {
    const allTestimonials = await "CREAR MODELO Y CONECTAR";
    return allTestimonials;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAllTestimonials };
