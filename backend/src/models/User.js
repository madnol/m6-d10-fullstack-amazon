const mongoose = require("mongoose");
const bcryp = require("bcrypt");

// ************************
// * USER MODEL
// ************************
const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, lowercase: true },
		surname: { type: String, required: true, lowercase: true },
		username: { type: String, required: true, lowercase: true },
		email: { type: String, required: true, lowercase: true },
		password: { type: String, required: true },
		role: { type: Number, default: 0 }, //0:user, 1:admin,...
		cart: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
				quantity: Number,
			},
		],
	},
	{ timestamps: true }
);

// ************************
// * HELPER FUNCTIONS
// ************************

const hashUserPassword = async function (next) {
	const salt = await bcryp.genSalt(10);
	this.password = await bcryp.hash(this.password, salt);
	next();
};

const getFullName = function () {
	return this.name + " " + this.surname;
};

// ************************
// * MONGOOSE FUNCTIONS
// ************************

userSchema.pre("save", hashUserPassword);

userSchema.virtual("fullName").get(getFullName);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
