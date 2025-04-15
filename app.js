const express = require('express');
const morgan = require('morgan');

const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//MIDDLEWARES
// console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// if (process.env.NODE_ENV === 'production') {
//   app.use(morgan('dev'));
// }

app.use(express.json());
app.use(express.static(`${__dirname}/Capstone/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 🖐️');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Routes

app.use('/api/v1/post', postRouter);
app.use('/api/v1/users', userRouter);

//Server
module.exports = app;
