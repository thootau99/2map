import mongo from '../db/mongo.js'

const location = {
    list() {
        return new Promise(async (resolve, reject) => {
            const client_db = await mongo()
            const locations = client_db.collection("locations")
            const queryResult = await locations.find({ 'N': 24.186872 })
            resolve(queryResult)
        })
    },
    insert() {
        return new Promise(async (resolve, reject) => {
            const client_db = await mongo()
            const locations = client_db.collection("locations")
            const _location_record = {
                N: 24.186872,
                E: 120.647936
            }
            const result = await locations.insertOne(_location_record);
            resolve()
        })
    }
}

export default location