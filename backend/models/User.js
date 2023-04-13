const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    validate: {
      validator: (v) => /^S+@S+.S+$/.test(v),
      message: (props) => `${props.value} no es una dirección de correo válida`,
    },
  },
  password: {
    type: String,
    validate: {
      validator: (v) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
          v
        ),
      message: (props) =>
        `${props.value} no es una clave segura. Debe tener al menos 8 caracteres de largo, una minúscula, una mayúscula, un dígito y un caracter especial (- ! , *)`,
    },
  },
  createdAt: {
    type: Date,
    inmutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const User = model('User', userSchema)

module.exports = User
