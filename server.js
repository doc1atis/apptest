const express = require("express");
// MAKE ENV_VARIABLE ACCESSIBLE
require("dotenv").config();
// IMPORT CORS TO ALLOW HTTP REQUEST
const cors = require("cors");
const connectToDB = require("./DB/connectTodb");
// ----------------------IMPORT ALL APP ROUTERS---------------------------
// const productsRouter = require("./routes/productsRouter");
// const usersRouter = require("./routes/usersRouter");
const app = express();
// connect to db
connectToDB();
// SET CORS OPTIONS FOR HTTP REQUEST
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true })); // to get req.body if it is in a FORM
app.use(express.json()); // to get access to req.body if it is in JSON format
// -----------------------USE ALL ROUTERS---------------
// app.use("/api/products", productsRouter);
// app.use("/api/users", usersRouter);
const PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log(`listening on port: ${PORT}`);
});
