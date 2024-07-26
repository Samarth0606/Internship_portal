const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({msg:"not an authenticated user"});
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        if(!decoded){   
            return res.status(500).json({msg:"not an authenticated user"})
        }
        next();
    } catch (err) {
        return res.status(403).json({msg:"Token is not valid"});
    }
};

module.exports = authMiddleware;