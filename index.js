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
app.delete('/delete', (req, res)=>{
    models.favoriteFood.deleteMany().then(()=>{
    console.log('Bye');
    })
})

// app.get('/comment', (req, res) => {
//     const post2 = new BlogPost({ title: 'Cool post', body: 'Lets do something'});
//     const myComment = { header: 'Cool', content: 'This is a cool post'}
//     post2.comments.push(myComment);
//     post2.save();
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sever listening on PORT: ${PORT}`);
});