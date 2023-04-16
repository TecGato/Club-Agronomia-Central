const { mercadopago } = require("../../mercadoPago/mercadoPago");

const donation = async (req, res) => {
  // const { datos } = req.body;
  try {
    return res.status(200).json({message: "hola estas en la ruta de pago"})
    // Crea un objeto de preferencia
    let preference = {
      items: [
        {
          title: "Aporte",
          unit_price: datos.mont,
          quantity: 1,
        },
      ],
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        // Este valor reemplazará el string "<%= global.id %>" en tu HTML

        return res.status(200).json(
          global.id = response.body.id
        );
        
      })
      .catch(function (error) {
        console.log(error);
      });

  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  donation,
};
