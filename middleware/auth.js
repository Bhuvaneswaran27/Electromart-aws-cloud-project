const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Access denied. No token provided."
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, "electromart_secret");
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({
            message: "Invalid token"
        });
    }
};
