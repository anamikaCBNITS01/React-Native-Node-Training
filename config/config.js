const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongodb Connected `);
  } catch (error) {
    console.error(`Error : ${error.message}`);
  }
};

module.exports = connectDb;
