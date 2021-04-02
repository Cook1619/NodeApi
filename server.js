const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT = 5000
dotenv.config();



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})