const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const brothRoutes = require('./routes/brothRoutes');
const proteinRoutes = require('./routes/proteinRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/broths', brothRoutes);
app.use('/proteins', proteinRoutes);
app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});