const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


async function pool() {
  try {
    return (await MongoClient.connect("mongodb://localhost:27017"));
  } catch (e) {
    console.error(e.stack);
  }
}