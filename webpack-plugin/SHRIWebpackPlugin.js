const path = require('path')
const { validate } = require('schema-utils')
const findJSFilesInDir = require('./helpers/findJSFilesInDir')
const writeToJSON = require('./helpers/writeToJSON')

// schema for options object
const schema = {
    type: 'object',
    properties: {
        src: {
            type: 'string'
        },
        outputFile: {
            type: 'string'
        },
        exclude: {
            type: 'array'
        }
    }
}

const initialOptions = {
    src: '',
    outputFile: '',
    exclude: []
}

class SHRIWebpackPlugin {

    /**
     * @param {initialOptions} options 
     */
    constructor(options = initialOptions) {
        validate(schema, options, { name: 'SHRIWebpackPlugin' })
        this.options = options
    }

    /**
     * @param {import('webpack').Compiler} compiler
     */
    apply(compiler) {
        const pluginName = SHRIWebpackPlugin.name

        compiler.hooks.compilation.tap(pluginName, (compilation) => {

            compilation.hooks.finishModules.tapPromise(pluginName, async (modules) => {
                const filesSet = await findJSFilesInDir(this.options.src, {
                    exclude: this.options.exclude
                })
                for (const module of modules) {
                    filesSet.delete(module.resource)
                }
                const files = Array.from(filesSet).map(file => path.relative(process.cwd(), file))
                await writeToJSON(files, this.options.outputFile)
            })

        })
    }
}

module.exports = SHRIWebpackPlugin