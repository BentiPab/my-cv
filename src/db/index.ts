import { connect, connection } from "mongoose";
require("./schemas/index");

const connected = {
  isConnected: false,
};

let dbUri = process.env.MONGO_URI;
let dbName = process.env.MONGO_DB;

export async function connectDb() {
  if (connected.isConnected) {
    return;
  }

  if (!dbUri) {
    throw new Error("Provide Database URI");
  }
  if (!dbName) {
    throw new Error("Provide Database Name");
  }
  const client = await connect(dbUri, { dbName: dbName });
  client.set("strictQuery", false);
  connected.isConnected = client.connections[0].readyState === 1;

  console.log("Connected to MongoDB ---->", client.connection.db.databaseName);
}

connection.on("connected", () => {
  console.log("MongoDB Connected");
});

connection.on("error", (error) => {
  console.log(error);
});
