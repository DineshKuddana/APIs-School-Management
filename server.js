const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const port = 3000;
const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/school', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open', () => {
    console.log('Mongodb Connection Successful');
});



const schoolSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  });



  const schools = mongoose.model("data", schoolSchema);


  app.get('/root' , (req,res) =>{
    res.send("Hello World");
  });



  app.post('/addSchool', async (req, res) => {
    const {name, address, latitude , longitude } = req.body;
    const school = new schools({
        name,
        address,
        latitude,
        longitude
    });

    await school.save();
    console.log(school);
    res.send('Data submission Successful');
});




app.get('/listSchools', (req, res) => {
    schools.find()
        .then(datas => {
            res.status(200).json(datas);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' });
        });
});




app.listen(port, () => {
    console.log("Server Started on port", port);
});
