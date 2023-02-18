// in typescript this is not necessary
const { response } = require('express')

const userGet = (req = request, res = response) => {
    const body = req.body

    res.json({
        message: "this is the information requested",
        body
    })
}

const userPost = (req, res = response) => {
    const body = req.body

    res.json({
        message: "post method",
        body
    })
}

module.exports = { userGet, userPost }