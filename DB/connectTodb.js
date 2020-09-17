const mongoose = require("mongoose");
module.exports = async function () {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("connected to mongoDB");
  } catch (error) {
    console.log("failed to connect to mongoDB");
  }
};
