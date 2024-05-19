const bcrypt = require("bcryptjs")

// hash data
exports.hashData = async (data, saltRounds = 10) => {
    try {
        const hash = await bcrypt.hash(data, saltRounds);
        return hash
    } catch (error) {
        throw error
    }
}

// verify hashed data

exports.verifyHashedData = async (unhashed, hashed) => {
    try {
        const match = await bcrypt.compare(unhashed, hashed);
        return match
    } catch (error) {
        throw error
    }
}