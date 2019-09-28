const express = require('express');
const fs = require('fs')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()

// Enable CORS
app.use(cors())

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
    // The same works with a callback function:
    /*Pokemon.find({}, function(data, err){
        if(data)
            res.json(data)
        else
            res.json(err)
    })*/
})

app.get('/:id', (req, res, next) => {
    const promise = Pokemon.find({national_id:req.params.id})
    promise.then((pokemon) => {
        if(!pokemon)
            next({message: "The pokemon doesn't exist"})
        res.json(pokemon)
    }).catch(err => res.json(err))
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Express server çalıştı.");
})