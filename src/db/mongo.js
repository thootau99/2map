// const { MongoClient } = require('mongodb');
// or as an es module:
import { Db, MongoClient } from 'mongodb'

// Connection URL
const MONGO_ACCOUNT = process.env.MONGO_INITDB_ROOT_USERNAME ? process.env.MONGO_INITDB_ROOT_USERNAME : "root"
const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD ? process.env.MONGO_INITDB_ROOT_PASSWORD : ""
const MONGO_HOST = process.env.MONGO_HOST ? process.env.MONGO_HOST : "mongo"
const MONGO_DATABASE = process.env.MONGO_DATABASE ? process.env.MONGO_DATABASE : "2map"

const url = `mongodb://${MONGO_ACCOUNT}:${MONGO_PASSWORD}@${MONGO_HOST}:27017`;


/**
 * 
 * @returns {Promise<Db>}
 */
const mongo = () => {
    return new Promise(async (resolve, reject) => {
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

export default mongo