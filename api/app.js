const express = require("express")
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const helmet = require('helmet')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
 },  
 () => {
    console.log('connected to mongoDb');
  } 
)

//MIDDLEWARES
app.use(express.json())
app.use(helmet())
app.use(morgan())
app.use('api/users',userRoute)
app.use('api/auth',authRoute)

app.get('/',(req,res)=>res.send('welcome Home Page'))

app.listen(8080,() => {
  console.log('backend server is running!')
})

























// const userRoute = require('./routes/users')
// const authRoute = require('./routes/auth')
// const postRoute = require('./routes/posts')
// const messageRoute = require('./routes/messages')
// const conversationRoute = require('./routes/conversations')
// const path = require("path")