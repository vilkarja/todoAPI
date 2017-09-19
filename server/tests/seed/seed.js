const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo')
const {User} = require('./../../models/user')
const jwt = require('jsonwebtoken');


const userOneID = new ObjectID();
const userTwoID = new ObjectID();
const users = [{
    _id: userOneID,
    email: 'userOne@example.com',
    password: 'UserOnePass',
    tokens: [{
        access: 'auth',
        token:  jwt.sign({_id: userOneID, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}, {
    _id: userTwoID,
    email: 'userTwo@example.com',
    password: 'UserTwoPass',
    tokens: [{
        access: 'auth',
        token:  jwt.sign({_id: userTwoID, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}];

const todos = [{
    _id: new ObjectID(),
    text: "First task to do",
    _creator: userOneID
}, {
    _id: new ObjectID(),
    text: "Second task to do",
    completed: true,
    completedAt: 2222,
    _creator: userTwoID
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