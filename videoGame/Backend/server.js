const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://root:Mike1991@cluster0-dg5xo.mongodb.net/project?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: String,
    year: String,
    genre: String,
    rating: String,
    poster: String,
    review: String
});

const GameModel = mongoose.model('game', gameSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });



app.get('/api/games', (req, res, next) => {

    console.log("get request")
    GameModel.find((err, data) => {
        res.json({ games: data });
    })
})


app.delete('/api/games/:id', (req,res) => {
    console.log(req.params.id);
   GameModel.deleteOne({_id:req.params.id},(error,data) => {
     if(error)
     res.json(error);

      res.json(data);
    })
  })

app.get('/api/games/:id', (req, res, next) => {
    console.log(req.params.id);
    GameModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        })
})

app.get('/api/games/search/:genre/:criteria', (req,res)=>{
    console.log(req.params.genre);
    console.log(req.params.criteria);
  if(req.params.criteria == 'genre')
    {
    GameModel.find({ 'genre': req.params.genre},
  (error,data) =>{
    res.json(data);
  })
    }
  })


app.put('/api/games/:id', function (req, res) {
    console.log("Update Game " + req.params.id);
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.genre);
    console.log(req.body.rating);
    console.log(req.body.poster);
    console.log(req.body.review);
    GameModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        function (err, data) {
            res.send(data);
        })
})




app.post('/api/games', (req, res) => {
    console.log('post Sucessfull');
    console.log(req.body)
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.genre);
    console.log(req.body.rating);
    console.log(req.body.poster);
    console.log(req.body.review);

    GameModel.create({
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        rating: req.body.rating,
        poster: req.body.poster,
        review: req.body.review
    });
    res.json('data uploaded')


})

app.get('/api/games/:id', (req, res) => {
    console.log(req.params.id);

    GameModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})




app.listen(PORT, function () {
    console.log('Server is running on Port: ', PORT);
});