const jwt = require("jsonwebtoken");

const { jwtSecret, liveUrl } = require("../config/keys");

//If the user is not verified (no token or invalid token)
//this middlewares protects the selected routes
exports.verifyAccessToken = (req, res, next) => {
	if (!req.headers["authorization"])
		return res.status(401).json({ errorMessage: "Unauthorized!" });

	const authHeader = req.headers["authorization"];
	const bearerToken = authHeader.split(" ");
	const token = bearerToken[1];

	jwt.verify(token, jwtSecret, (err, payload) => {
		if (err) return res.status(401).json({ errorMessage: "Unauthorized!" });
		req.payload = payload;
		next();
	});
};
