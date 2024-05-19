const jwt = require("jsonwebtoken")

const { TOKEN_KEY } = process.env

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const _token = authHeader && authHeader.split(' ')[1];

    const token = req.headers["x-access-token"] || req.headers["authorization"] || req.query.token || req.body.token || _token

    if (!token) return res.status(403).send({
        message: "No token provided",
    })

    try {
        const decoded = jwt.verify(token, TOKEN_KEY)
        req.user = decoded
    } catch (error) {
        return res.status(401).send({
            message: "Unauthorized: Invalid token",
        })
    }

    return next()
}