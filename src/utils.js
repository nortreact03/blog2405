const contentful = require('contentful')

const client = contentful.createClient({
  space: 'df0q70eltc2r',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'RJa6rJ73cqxmbMku95xMrbNIRHCXFZMEz27vm9nW3n0'
})

async function getAllPosts() {
    try {
        let result = await client.getEntries( {
            content_type: 'post',
            include: 2,
        });
        console.log(result.items)
        return result.items;
    } catch (err) {
        console.error(err.message)
        return [];
    }
 }
 

export { getAllPosts }
