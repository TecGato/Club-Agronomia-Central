const getAllTestimonials = async () => {
  try {
    const allTestimonials = await "CREAR MODELO Y CONECTAR";
    return allTestimonials;
  } catch (error) {
    console.error(error.message);
  }
};

const getTestimonialByName = async (name) => {
  try {
    const testimonial = await "CREAR MODELO Y CONECTAR";
    return testimonial;
  } catch (error) {
    console.error(error.message);
  }
};

const getTestimonialById = async (id) => {
  try {
    const testimonial = await "CREAR MODELO Y CONECTAR";
    return testimonial;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getAllTestimonials,
  getTestimonialByName,
  getTestimonialById,
};
