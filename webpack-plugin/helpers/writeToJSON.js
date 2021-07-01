const { writeFile } = require('fs/promises')

async function writeToJSON(content, filename) {
    try {
        await writeFile(filename, JSON.stringify(content, null, 4))
    } catch (error) {
        console.error(error)
    }
}

module.exports = writeToJSON