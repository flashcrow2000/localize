const {MongoClient} = require('mongodb');

const dbUri = 'mongodb+srv://cosminTest:passwordTest@cluster0.1obob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const dbName = 'localecms';
const collectionName = 'localized-text';

const client = new MongoClient(dbUri);

const fetchLocalizedKey = async (page, useLocale, key) => {
    const locale = useLocale ? useLocale : 'en';
    try {
    await client.connect();
    pageQuery = key ? { page, locale, key } : { page, locale };
    console.log('run query:', pageQuery);
    queryResult = await client.db(dbName).collection(collectionName).find(pageQuery).toArray();
    return queryResult.map(item => {
        return {
            key: item.key,
            value: item.value
        }
    });
    } catch (e) {
        console.error(e);
    }
    finally {
        //await client.close();
    }
}

module.exports.fetchLocalizedKey = fetchLocalizedKey;