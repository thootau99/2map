const { mongo } = require('../db/mongo.js')

const cities = {
    async list() {
        const db = await mongo()
        try {
            const cities = await db.collection('cities').aggregate([{ $group: { _id: "$city" } }]).toArray()
            return cities.map(city => city._id)
        } catch (error) {
            throw error
        }
    },
    async getDistructsByCity(city) {
        const db = await mongo()
        try {
            const distructs = await db.collection('cities').aggregate([ 
                {$match: { city }},
                { $group: {_id: "$site_id"} }
            ]).toArray()
            return distructs.map(distruct => distruct._id)
        } catch (error) {
            throw error
        }
    },
    async getRoadsByDistructAndCity(city, distruct) {
        const db = await mongo()
        try {
            const roads = await db.collection('cities').find({ city, site_id: distruct }).toArray()
            return roads.map(road => road.road)
        } catch (error) {
            throw error
        }
    },
}

module.exports = {
    cities
}