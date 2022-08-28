const { mongo } = require("../src/db/mongo")

const fake_cities = [
    {"city":"臺中市","site_id":"大里區","road":"長龍路"},
    {"city":"臺中市","site_id":"太平區","road":"鵬儀路"}
]

const insert_fake_cities = async () => {
    const cilent_db = await mongo()
    await cilent_db.collection('cities').insertMany(fake_cities)
}


module.exports = {
    insert_fake_cities
}