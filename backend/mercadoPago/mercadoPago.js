const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-8997419309891212-041619-59f09dcfccf3459cf9891f6001e1145c-1354184108",
});

module.exports = {
  mercadopago,
};
