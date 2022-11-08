const fs = require('fs')
const cloneDeep = require('lodash.clonedeep')
const { getRcPath } = require('./rcPath')
const { error } = require('./logger')

const rcPath = exports.rcPath = getRcPath('.nproxyrc')

let cachedOptions

exports.loadOptions = () => {
    if (cachedOptions) {
        return cachedOptions
    }
    
    if (fs.existsSync(rcPath)) {
        try {
            cachedOptions = JSON.parse(fs.readFileSync(rcPath, 'utf-8'))
        } catch (e) {
            error(
                `Error loading saved preferences: `
                + `~/.nproxyrc may be corrupted or have syntax errors. `
                + `(${e.message})`,
            )

            process.exit(1)
        }
        
        return cachedOptions
    } 
    return {}
}

exports.saveOptions = (toSave) => {
    const options = Object.assign(cloneDeep(exports.loadOptions()), toSave)

    cachedOptions = options
    try {
        fs.writeFileSync(rcPath, JSON.stringify(options, null, 2))
        return true
    } catch (e) {
        error(
            `Error saving preferences: `
            + `make sure you have write access to ${rcPath}.\n`
            + `(${e.message})`,
        )
    }
}