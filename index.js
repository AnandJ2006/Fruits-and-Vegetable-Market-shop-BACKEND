const express = require("express");

const app = express();

const userRoutes = require("./Routes/UserRoute");
const orderRoutes = require("./Routes/OrderRoute");

// CORS Configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());

app.use("/api/user",userRoutes);
app.use("/api/orders",orderRoutes);


module.exports = app;