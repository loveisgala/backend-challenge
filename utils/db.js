const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


async function pool() {
  try {
    return (await MongoClient.connect("mongodb://localhost:27017")).db("partidos");
  } catch (e) {
    console.error(e.stack);
  }
}

module.exports = { pool };