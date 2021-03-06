const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const compression = require('compression');
const connectDB = require('./config/db');

dotenv.config({
    path: './config/config.env'
});

connectDB();

const app = express();
app.use(compression({
    level: 9
}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/api', require('./routes/routes'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
