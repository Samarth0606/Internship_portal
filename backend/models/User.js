const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        minLength:3,
        required: true 
    },
    email: { 
        type: String, 
        unique: true ,
        required: true
    },
    password: { 
        type: String, 
        minLength:6,
        required: true 
    },
    appliedOpportunities: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Opportunity' 
    }]
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
