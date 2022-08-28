const { mongo } = require('../src/db/mongo.js')

const clean_test_cache = async () => {
    const cilent_db = await mongo()

    try {
        await cilent_db.dropDatabase()
    } catch (error) {
        throw error
    }
}

module.exports = {
    clean_test_cache
}