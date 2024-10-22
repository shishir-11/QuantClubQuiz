const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGO_URI).then(()=>{

// })
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected", mongoose.connection.db.namespace)
}

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    score: { type: Number , default: -1 }
})
// const scoreSchema = new mongoose.Schema({
//     score: Number,
//     username: String
// })

const User = mongoose.model('Users', userSchema)
// const Score = mongoose.model('Scores', scoreSchema)


module.exports = {
    User,
    // Score
}

