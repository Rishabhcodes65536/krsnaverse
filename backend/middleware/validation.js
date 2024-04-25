import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        console.log("No token")
        return res.status(403).json({ message: "No token provided" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log("Unauthorized")
            return res.status(401).json({ message: "Unauthorized" });
        }
        console.log("Authorized");
        console.log(decoded);
        req.userId = decoded.userId;
        console.log(req.userId);
        next();
    });
}

export default verifyToken;