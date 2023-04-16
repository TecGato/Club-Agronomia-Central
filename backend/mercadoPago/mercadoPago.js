// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token:
    "TEST-2076510821324520-041605-0ea2fa3f6a746a75911f24d16c92b5f3-679720728",
});

module.exports = {
  mercadopago,
};
