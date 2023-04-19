const mongoose = require('mongoose');

const url = 'mongodb+srv://vartikasingh28:vartika28@cluster0.mjcbyat.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});
module.exports = mongoose;