const jwt = require('jsonwebtoken');

exports.verifyToken=(req,res,next)=>{
const token=req.headers.authorization.split(' ')[1]

jwt.verify(token,process.env.SECRET,(error,decoded)=>{

  if (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }else if (decoded) {
    next()
  }
})
}