var mongoose = require('mongoose');

var Sum = mongoose.model('Sum', {
    number3: {
        type: Number
    },
   
});

module.exports = {
    Sum
};