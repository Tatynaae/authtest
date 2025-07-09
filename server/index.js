const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(authRoutes);

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
