const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId

const User = new Schema({
    email:String,
    name:String,
    password:String,
})

const Todo = new Schema({
    userId:ObjectId,
    title:String,
    done:Boolean
})

const UserModel  = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);

module.exports = {
    UserModel,
    TodoModel
}