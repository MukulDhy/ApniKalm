const mongoose = require("mongoose");

const connectionDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `We are connected with mongoDb at port number${conn.connection.host}`
    );
  } catch (err) {
    console.log(`Some Error found in connecting to MongoDb server`);
  }
};

module.exports = connectionDb;
