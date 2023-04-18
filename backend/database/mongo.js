const mongoose = require('mongoose');

const connectionDB = async () => {
  const connectionString = `mongodb+srv://henrystudents:henrypf35a@mongo.dau0olv.mongodb.net/test`;
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(connectionString);
    console.log('connected');
  } catch (error) {
    console.log(error);
    throw new Error('Error when starting the database failed to connect');
  }
};

module.exports = { connectionDB };
