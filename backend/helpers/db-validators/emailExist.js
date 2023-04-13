const User = require('../../models/User');

const emailExist = async (email) => {
    const existeEmail = await User.findOne({ email });
    if (existeEmail) {
        throw new Error(`El correo ya esta registrado`);
    }
};

module.exports = {
    emailExist
}