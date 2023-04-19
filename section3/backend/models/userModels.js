const { Schema, model } = require ('../connection');
const myschema = new Schema({
name : String,
email : {type :String, unique :true},
password : String,
});
module.exports = model ('user', myschema);