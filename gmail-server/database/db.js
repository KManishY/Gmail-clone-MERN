import mongoose from "mongoose";

const Connection = () => {
    const DB_URI =`mongodb://manishyadav:kmanishy@ac-9dczsrz-shard-00-00.qngxa4n.mongodb.net:27017,ac-9dczsrz-shard-00-01.qngxa4n.mongodb.net:27017,ac-9dczsrz-shard-00-02.qngxa4n.mongodb.net:27017/?ssl=true&replicaSet=atlas-wr4mt8-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("database connection done");
  } catch (error) {
    console.log(`Error while connecting to database ${error.message}`);
  }
};

export default Connection