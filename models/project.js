const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: String,
    description: String,
    img: String,
    code: String,
    test: String
});

const Project = mongoose.model('project', projectSchema,'portafolio');

module.exports = Project;