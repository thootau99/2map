// const { MongoClient } = require('mongodb');
// or as an es module:
const {Db, MongoClient} = require('mongodb')
const fs = require('fs/promises')
/**
 * 
 * @returns {Promise<Db>}
 */
const mongo = () => {
    return new Promise(async (resolve, reject) => {
        // Connection URL
        const MONGO_ACCOUNT = process.env.MONGO_INITDB_ROOT_USERNAME ? process.env.MONGO_INITDB_ROOT_USERNAME : "root"
        const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD ? process.env.MONGO_INITDB_ROOT_PASSWORD : ""
        const MONGO_HOST = process.env.MONGO_HOST ?  process.env.MONGO_HOST : "mongo"
        const MONGO_DATABASE = process.env.MONGO_DATABASE ? process.env.test ? process.env.MONGO_DATABASE_TEST : process.env.MONGO_DATABASE : "2map"
        const url = `mongodb://${MONGO_ACCOUNT}:${MONGO_PASSWORD}@${MONGO_HOST}:27017`;
        try {
            const client = new MongoClient(url);
            await client.connect()
            const client_db = client.db(MONGO_DATABASE)
            resolve(client_db)
        } catch (err) {
            reject(err)
        }
    })
}

const initDB = async () => {
    const client_db = await mongo()
    const collections = await client_db.listCollections().toArray()
    if (!collections.find(collection => collection.name === 'cities')) {
        const cities = client_db.collection('cities')
        const cities_file = await fs.readFile(require('path').resolve(__dirname, '../../static/cities.json'))
        const cities_data = JSON.parse(cities_file)
        await cities.insertMany(cities_data)
    }
}

module.exports = {
    mongo,
    initDB
}