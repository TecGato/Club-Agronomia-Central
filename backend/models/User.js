const mongoose = require('mongoose');

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
            message: (props) =>
                `${props.value} no es una dirección de correo válida`,
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
    google: {
        type: Boolean,
        default: false,
    },
    state: {
        type: Boolean,
        default: true,
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
// convert _id to uid for better lecture
userSchema.methods.toJSON = function () {
    const { _id } = this.toObject();
    user.uid = _id;
    return user;
};

const User = model('User', userSchema)

module.exports = User
