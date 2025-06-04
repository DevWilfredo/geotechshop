const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: [process.env.FRONTEND_URL],
};

app.use(cors(corsOptions));
app.use(morgan('dev'));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/v1', routes);

app.listen(PORT, () => {
  console.log(`Server running at ${process.env.SERVER_URL}`);
});
