const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo')
const {User} = require('./../../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userOneID = new ObjectID();
const userTwoID = new ObjectID();
const users = [{
    _id: userOneID,
    email: 'userOne@example.com',
    password: 'UserOnePass',
    tokens: [{
        access: 'auth',
        token:  jwt.sign({_id: userOneID, access: 'auth'}, 'secretValue').toString()
    }]
}, {
    _id: userTwoID,
    email: 'userTwo@example.com',
    password: 'UserTwoPass',
}];

const todos = [{
    _id: new ObjectID(),
    text: "First task to do"
}, {
    _id: new ObjectID(),
    text: "Second task to do"
}, {
    _id: new ObjectID(),
    text: "Third task to do",
    completed: true,
    completedAt: 2222
}, {
    _id: new ObjectID(),
    text: "Fourth task to do"
}, {
    _id: new ObjectID(),
    text: "Last task to do"
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        return Promise.all([userOne, userTwo])
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};