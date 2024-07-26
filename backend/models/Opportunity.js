const mongoose = require("mongoose");

const OpportunitySchema = new mongoose.Schema({
    profileName: {
        type: String,
        required: true 
    },
    companyName: {
        type: String,
        required: true 
    },
    stipend: {
        type: Object,
        required: true 
    },
    location: {
        type: Array, 
        required: true 
    },
    duration: {
        type: String,
        required: true 
    },
    startDate: {
        type: String,
        required: true 
    }
});

const Opportunity =  mongoose.model("Opportunity", OpportunitySchema);
module.exports = Opportunity;
