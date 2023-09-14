import mongoose from "mongoose";

const Connection = () => {
    const DB_URI =`mongodb://atlas-sql-6320951598fd2e5f55641e3a-zmeft.a.query.mongodb.net/gmailClone?ssl=true&authSource=admin`;
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("database connection done");
  } catch (error) {
    console.log(`Error while connecting to database ${error.message}`);
  }
};

export default Connection