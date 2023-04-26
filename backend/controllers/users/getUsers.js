// const { getUser } = require('../../helpers/users/getUsers');
// const User = require('../../models/User');

// const checkLogin = async (req, res) => {
//   const { ...userInfo } = req.body;
//   try {
//     const cookie = await getUser(userInfo);
//     res.setHeader('Set-Cookie', cookie);
//     return res.status(200).json('Logged in Successfully');
//   } catch (error) {
//     return res.status(401).json({
//       msg: 'Login Failed',
//       error,
//     });
//   }
// };

// const createUser = async (req, res) => {
//   const { name, email, password, role } = req.body;
//   try {
//     const newUser = new User({
//       name,
//       email,
//       password,
//       role,
//     });
//     await newUser.save();
//     return res.status(201).json({
//       msg: 'User Created Successfully',
//       newUser,
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// module.exports = {
//   checkLogin,
//   createUser,
// };
