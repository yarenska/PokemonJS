const express = require('express');
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()

app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.json({ error: err.message})
})

//Database
const db = require('./helper/db.js')()

// Config
const config = require('./config')
app.set('api_secret_key', config.api_secret_key)

// Modules
const Pokemon = require('./models/Pokemon')

app.get('/', (req, res) =>{
    const promise = Pokemon.find({})
    promise.then(data => res.json(data)).catch(err => res.json(err))
    
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Express server çalıştı.");
})