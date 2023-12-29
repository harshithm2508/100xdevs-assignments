const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://harshithm2508:harshith25@tutcluster.usz8o0m.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("You are connected to the database.")
}).catch((err)=>{
    console.log("There was an error connecting to the database : "+err);
})

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    price : Number,
    imageLink : String  
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}