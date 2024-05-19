const bcrypt = require("bcryptjs")

exports.hashData = async (data, saltRounds = 10) => {
    try {
        const hash = await bcrypt.hash(data, saltRounds);
        return hash
    } catch (error) {
        throw error
    }
}