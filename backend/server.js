const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const mainHandler = require('./mainhandler');

app.use(cors()); 
app.use(express.json()); 

//connecting DB
mongoose.connect(process.env.DB_URI)
.then(() => console.log('DB connected successfully'))
  .catch(err => console.log(err));

//dividing code for better versioning of apis for future refernce
app.use('/api/v1',mainHandler);


const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));