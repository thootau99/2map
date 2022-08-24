import mongo from '../db/mongo.js'

const location = {
    generate_location_record(N, E, road1, road2, cancel, comment) {
        return {
            N,
            E,
            road1,
            road2,
            cancel,
            comment
        }
    },
    list() {
        return new Promise(async (resolve, reject) => {
            const client_db = await mongo()
            const db_locations = client_db.collection("locations")
            const queryResult = await db_locations.find().toArray()
            resolve(queryResult)
        })
    },
    insert({N, E, road1, road2, cancel, comment}) {
        return new Promise(async (resolve, reject) => {
            const location_record = this.generate_location_record(N, E, road1, road2, cancel, comment)
            const client_db = await mongo()
            const locations = client_db.collection("locations")
            await locations.insertOne(location_record);
            resolve()
        })
    }
}

export default location