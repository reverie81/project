const mongoose = require('./mongo.js');
Schema = mongoose.Schema
let UserSchema = new Schema({
    username:{type:String},
    password:{type:String},
})
module.exports = mongoose.model('User',UserSchema)