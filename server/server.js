const express = require('express');

const app = express();
const port = 3001;

// Define your routes here

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});