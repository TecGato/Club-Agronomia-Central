const { response, request } = require('express');

const login = async (req = request, res = response) => {
    const { email, password } = req.body;

    try {
        return res.status(200).json({
            correo: email,
            contraseña: password,
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Contact with administrator',
        });
    }
};

module.exports = {
    login,
};
