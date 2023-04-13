const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../../models/User');

const register = async (req = request, res = response) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    // Encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    // Save in DB
    await User.save();

    return res.status(201).json({
        msg: 'User succesfull registered',
        user: { name, email, password, role },
    });
};

module.exports = { register };
