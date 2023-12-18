// token Generator
const jwt = require('jsonwebtoken');
const tokenGenerator = (payload:{},secret:String):String => {
  return jwt.sign(payload, secret, { expiresIn: '1d' });
};



module.exports = {tokenGenerator};