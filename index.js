require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const favoriteFood = require('./models/favoriteFood');

mongoose.connect(`mongodb://localhost/mongooseApiMyFavoriteFood`)

const db = mongoose.connection;
console.log(db);

db.once('open', () => {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
db.on('error', (err) => {
    console.log(`Error`, err);
});

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Home Route, Backend')
});

app.get('/favoriteFood', (req, res) => {
    favoriteFood.create({name: 'Carolina', foodType: 'Spaghetti', origin: 'Italy'});
    res.send('Post completed');
});
app.post('/',(req,res)=>{
    models.favoriteFood.create(req.name).then((favoriteFood)=>{
        res.status(201).json({favoriteFood})
    }).catch((err)=>{
        res.send(err)
    })
})
app.put('/:id',(req,res)=>{
    res.send('hello')
})

// app.put('/:id',(req,res)=>{
//     mongoose.models.favoriteFood.put(req.calories). then((favoriteFood)=>{
//         res.status(201).json({favoriteFood})
//     }).catch((err)=>{
//         res.send('hello')
//     })
// })

app.delete('/:id',(req,res)=>{
    res.send('delete')
})

app.delete('/delete', (req, res)=>{
    models.favoriteFood.deleteMany().then(()=>{
    console.log('Bye');
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sever listening on PORT: ${PORT}`);
});