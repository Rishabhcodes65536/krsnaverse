import createHttpError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
import { join } from "path"

// import ejs from "ejs"

const app=express()
const port=process.env.PORT || '3000'
const DATABASE_URI=process.env.DATABASE_URI || "mongodb://localhost:27017"
import connectDB from "./db/connectdb.js";

connectDB(DATABASE_URI);

app.use(express.urlencoded({extended:false}))


import web from './routes/index.js'

import travelRouter from './routes/travelRoute.js'
import bookRouter from './routes/bookRoutes.js'
import musicRouter from './routes/musicRouter.js'
import adminRoutes from './routes/adminRoutes.js'


// view engine setup

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));

app.use('/', web);
app.use('/travel', travelRouter);
app.use('/books', bookRouter);
// app.use('/shop', shopRouter);             
// app.use('/event', eventRouter);
app.use('/music',musicRouter);
app.use('/admin',adminRoutes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

