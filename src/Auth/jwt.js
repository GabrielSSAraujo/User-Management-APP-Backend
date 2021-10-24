const jwt = require('jsonwebtoken');

const secret = 'fgfdhjgkhlçjkgjdfhsdg';

const sign = payload => jwt.sign(payload, secret, {expiresIn: 3600});

const decode = token => jwt.verify(token,secret);

const checkJWT = (req, res, next) =>{
    const token = req.headers["x-access-token"];
    
    return jwt.verify(token, secret, (error, decoded) =>{
        if(error){
            return res.status(500).json({message: "Falha na autenticação do token"})
        }
        req.decoded = decoded;
        next();

        return undefined;
    });
}

module.exports = {sign, decode, checkJWT}