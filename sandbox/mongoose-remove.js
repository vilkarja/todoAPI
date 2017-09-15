const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove('59bbd4c665cd3529c02d798d').then((todo) => {
    console.log(todo)
});