require("dotenv").config();
const jwt = require('jsonwebtoken');

const token = () =>{
    return{
        access(id){
            return jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET , {
                expiresIn: "15m",
            });
        },
        refresh(id){
            return jwt.sign({id}, process.env.REFRESH_TOKEN_SECRET , {
                expiresIn: "2 days",
            });
        },
        issuance(token, res) {
            return jwt.verify(
                token,
                process.env.REFRESH_TOKEN_SECRET,
                (err, user) => {
                    if (err) res.sendStatus(403)
                    const key = this.access(user.id)
                    return key
                }
            )
        }
    }
}


module.exports = {token}