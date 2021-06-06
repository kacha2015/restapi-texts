const express = require('express');
require('dotenv').config();
const cors = require('cors');

// Create express server
const app = express();

// CORS
app.use(cors())

// Public folder
app.use( express.static('public') );

// Parser body
app.use( express.json() );

// Routes
app.use('/iecho', require('./routes/texts') );

// Server
app.listen( process.env.PORT, () => {
    console.log(`Server running on ${ process.env.PORT }`);
});






