var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27017/TodoAPP';
mongoose.connect(url,{useMongoClient: true});

module.exports = {
    mongoose
};