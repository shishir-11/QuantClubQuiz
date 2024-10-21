require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
const { User } = require('./models/db.js')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('server working')
})


// signup logic
app.post('/signup', async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({ email: email })

    if (user) {
        res.json({ msg: "FAIL" })
        return
    }
    // console.log({
    //     username,
    //     email,
    //     password: password
    // })

    await User.create({
        username,
        password,
        email,
        score: -1
    })

    res.json({
        msg: "SUCCESS"
    })
})

//signin logic
app.post('/signin', async (req, res) => {
    // const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({
        email,
        password
    })


    if(user) {
        res.status(200).json({
            msg: "SUCCESS",
            score: user.score,
            name : user.username
        })
        return
    }

    res.status(200).json({
        msg: "FAIL"
    })
})

// get all scores
app.get('/score', async (req, res) => {
    const users = await User.find({
        score: { $ne: -1 }
    });
    res.status(200).json({
        users
    })
})

// post a new entry in leaderboard
app.post('/score', async (req, res) => {
    const score = req.body.score
    const email = req.body.email

    const user = await User.findOneAndUpdate({
        email: email
    }, {
        score: score
    },{
        new: true
    })

    res.json({
        msg:"Added"
    })

})


app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})