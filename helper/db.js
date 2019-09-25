const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect('mongodb://sila:Hazel.lp.7@ds247377.mlab.com:47377/heroku_wrjgktfd')
    mongoose.connection.on('open', () => {
        console.log("MongoDB connected")
    })
    mongoose.connection.on('error', (err) => {
        console.log("MongoDB can not connected")
    })

    mongoose.Promise = global.Promise; //mongoose komutlarını callback olarak değil de 
                                        // promise yapısında yapabilmemizi sağlar
}