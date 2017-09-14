// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


var url = 'mongodb://localhost:27017/TodoAPP';

MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Failed to connect database!');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59baac9032b32f35372ffcc2')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //  db.close();
});
