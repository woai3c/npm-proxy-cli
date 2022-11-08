const os = require('os')
const path = require('path')

exports.getRcPath = (file) => {
    return path.join(os.homedir(), file)
}
