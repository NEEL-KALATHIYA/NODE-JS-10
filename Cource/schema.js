const mongose = require('mongoose');

const students = new mongose.Schema({
    name: String,
    number: Number,
    course: String
})

let student = mongose.model("students", students)

module.exports = student;
