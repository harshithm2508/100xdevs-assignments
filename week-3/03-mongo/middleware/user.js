function userMiddleware(req, res, next) {

    const { User } = require('../db/index')
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({
        username : username,
        password : password
    }).then((value)=>{
        if(value)
            next();
        else    
            res.status(403).json({
                "msg" : "User does not exist."
        })
    })


}

module.exports = userMiddleware;