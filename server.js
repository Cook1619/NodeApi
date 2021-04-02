const express = require('express');
const app = express();
const dotenv = require('dotenv');
const pool = require('./db');
const cors = require('cors');
const PORT = 5000
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.put(('/groceryitem'), async(req, res) => {
    try {
        const {item_name, department, in_cart} = req.body;
        const newItem = await pool.query("INSERT INTO groceryitem (item_name, department, in_cart) VALUES($1, $2, $3) RETURNING *",
        [item_name, department, in_cart]);
        console.log('ITEM WAS ADDED TO DB')
        res.json(newItem.rows[0]);
    } catch (error) {
        console.error(error);
    }
})

app.get(('/groceryitem'), async(req, res) => {
    try {
        const allItems = await pool.query("SELECT * FROM groceryitem");
        res.json(allItems.rows);
    } catch (error) {
        console.error(error);
    }
})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})