// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


var url = 'mongodb://localhost:27017/TodoAPP';

MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Failed to connect database!');
    }
    console.log('Connected to MongoDb server');

    db.collection('Todos').insertOne({
        text: 'something to do',
        completed: false
    }, (err, res) => {
        if (err) {
            return console.log(' Unable to insert todo', err)
        }

        console.log(JSON.stringify(res.ops, undefined, 2));
    });

    // db.collection('Users').insertOne({
    //     name: 'Ville',
    //     age: 22,
    //     location: 'Tampere'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log(' Unable to insert user', err)
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    //     console.log(res.ops[0]._id.getTimestamp());
    // });


    db.close();
});
