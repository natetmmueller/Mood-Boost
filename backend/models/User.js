const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minlength: [2, 'First name must be atleast 2 letters'],
        maxlength: [50, 'Wow! over 50 characters, thats too much!']
    },
    lastName: {
        type: String,
        required: true,
        minlength: [2, 'First name must be atleast 2 letters'],
        maxlength: [50, 'Wow! over 50 characters, thats too much!']
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Your password should be atleast 8 characters']
    }
}
,
    {
        timestamps: true
    })

    userSchema.methods.verifyPassword = function(password){
        return bcrypt.compareSync(password, this.password)
    }
    
const User = mongoose.model("User", userSchema);

module.exports = User;