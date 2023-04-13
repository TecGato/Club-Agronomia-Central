const mongoose = require('mongoose')

const connectionDB = ()=>{
    const connectionString = `mongodb+srv://henrystudents:henrypf35a@mongo.dau0olv.mongodb.net/test`    
    mongoose.connect(connectionString)
        .then(() => {
            console.log('connected')
        }).catch(err => console.log(err))
}

module.exports = connectionDB