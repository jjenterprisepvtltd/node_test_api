const { errorHandler } = require('./middleware/errorMiddleware');
const express = require('express');
const port = 5000;

const app = express();

// add these lines to accept req body for POST call
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/todos', require('./routes/todoRoutes'));


app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})