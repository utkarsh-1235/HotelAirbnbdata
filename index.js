const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const database = "Hotel";


async function getData(){

    let result = await client.connect()

    let db = result.db(database);

    let collection = db.collection('airbnb_data');

    let response = await collection.find({}).toArray();

    console.log(response);



}

getData()