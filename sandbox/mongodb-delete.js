// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


var url = 'mongodb://localhost:27017/TodoAPP';

MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Failed to connect database!');
    }
    console.log('Connected to MongoDb server');

    db.collection('Todos').deleteMany({compledted: false}).then((result) => {
        console.log(result);
    });
    db.collection('Todos').deleteOne({text: 'Make the food'}).then((result) => {
        console.log(result);
    });
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    //  db.close();
});
