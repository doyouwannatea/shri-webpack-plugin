const path = require('path')
const { validate } = require('schema-utils')
const findFilesInDir = require('./helpers/findFilesInDir')
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
        },
        include: {
            anyOf: [
                { type: 'string' },
                { instanceof: 'RegExp' }
            ]
        }
    }
}

const initialOptions = {
    src: '',
    outputFile: '',
    exclude: [],
    include: ''
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
                const filesSet = await findFilesInDir(this.options.src, {
                    exclude: this.options.exclude,
                    include: this.options.include
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