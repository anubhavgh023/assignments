const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://anubhavmdb:5GSiTXFUqpVyNNco@cluster0.49h1psc.mongodb.net/course-app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imgLink: String,
    published: Boolean,
});

//compiling the schemas
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);


module.exports = {
    Admin,
    User,
    Course
}