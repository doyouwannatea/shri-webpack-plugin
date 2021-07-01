const path = require('path')
const { readdir, stat } = require('fs/promises')

async function findFilesInDir(root, { exclude = [], include }) {
    const files = new Set()

    if (!(await stat(root)).isDirectory())
        throw new Error('root arg is not a directory')

    async function readDirTree(root) {
        try {
            const dirFiles = await readdir(root)

            for (const fileName of dirFiles) {
                const fileNotPassed = exclude.some(reg =>
                    new RegExp(reg).test(fileName)
                )

                if (fileNotPassed) continue

                const filePath = path.join(root, fileName)
                if ((await stat(filePath)).isDirectory()) {
                    await readDirTree(filePath)
                    continue
                }

                if (include && !new RegExp(include).test(fileName)) continue

                files.add(filePath)
            }
        } catch (error) {
            console.error(error)
        }
    }

    await readDirTree(root)
    return files
}

module.exports = findFilesInDir