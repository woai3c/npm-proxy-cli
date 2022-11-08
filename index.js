#!/usr/bin/env node
const { execSync } = require('child_process')
const { saveOptions, loadOptions } = require('./options')
const argv = process.argv.slice(2)
const { error, info } = require('./logger')

// my proxy url http://127.0.0.1:58591
const re = /^htts?/
if (argv[0] === 'open') {
    const url = loadOptions().url

    if (!re.test(url)) {
        error('The registered url is incorrect or not found.')
        return
    }

    execSync(`npm config set proxy ${url}`)
    execSync(`npm config set https-proxy ${url}`)

    info('Open proxy.')
} else if (argv[0] === 'close') {
    execSync('npm config delete proxy')
    execSync('npm config delete https-proxy')

    info('Close proxy.')
} else if (argv[0] === 'registry') {
    if (!re.test(argv[1])) {
        error('Please enter the correct url.')
        return
    }

    saveOptions({
        url: argv[1]
    })

    info('Registry proxy.')
} else {
    info('Plese enter the correct command: registry, open, close.')
}