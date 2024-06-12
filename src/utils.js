const contentful = require('contentful')

const client = contentful.createClient({
  space: 'df0q70eltc2r',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'RJa6rJ73cqxmbMku95xMrbNIRHCXFZMEz27vm9nW3n0'
})

async function getAllPosts() {
    return client.getEntries()
    .then((response) => {
        console.log(response.items)
        return response.items
    })
    .catch(console.error)

}

export { getAllPosts }
