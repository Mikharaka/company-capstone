const User = require('../models/user')
const { hashPassword, comparePassword} = require('../helpers/auth')

const test = (req, res) => {
    res.json('test is working')
}

// REGISTER
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // Check name
        if(!name){
            return res.json({
                error: 'name is required'
            })
        };
        // Check password
        if(!password || password.length < 6){
            return res.json({
                error: 'password is required ans should be at least 6 characters long'
            })
        };
        // Check email
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error: 'email is taken already'
            })
        };

        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            name, 
            email, 
            password:hashedPassword,
        });

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

//LOGIN
const loginUser = async (req, res) =>{
    try {
        const {email, password} = req.body;

        // Check
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'no user found'
            })
        }

        const match = await comparePassword(password, user.password)
        if(match){
            res.json('password match')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    test,
    registerUser,
    loginUser
}