// const { MongoClient } = require('mongodb');
// or as an es module:
import { MongoClient } from 'mongodb'

// Connection URL
const MONGO_ACCOUNT = process.env.MONGO_INITDB_ROOT_USERNAME ? process.env.MONGO_INITDB_ROOT_USERNAME : "root"
const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD ? process.env.MONGO_INITDB_ROOT_PASSWORD : ""
const MONGO_HOST = process.env.MONGO_HOST ? process.env.MONGO_HOST : "mongo"
const MONGO_DATABASE = process.env.MONGO_DATABASE ? process.env.MONGO_DATABASE : "2map"

const url = `mongodb://${MONGO_ACCOUNT}:${MONGO_PASSWORD}@${MONGO_HOST}:27017`;
const client = new MongoClient(url);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(MONGO_DATABASE);
  const collection = db.collection('documents');

}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());