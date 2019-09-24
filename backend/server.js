const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

dotenv.config({ path: '../config.env'})

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// connects our back end code with the database
mongoose.connect(dbRoute, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log(con.connections);
    console.log('DB connection successful!');
});

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post('/putData', (req, res) => {
    console.log('Entered post method');
  let data = new Data();

  const { id, negotiated, salary, equity, one_time, lat, long, ed_level, company_size, job_title } = req.body;

  if ((!id && id !== 0) || !job_title=='' || !company_size=='' || !salary=='' || !equity=='' || !one_time=='' || !ed_level=='' || !lat=='' || !long=='' || !negotiated=='') {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  data.company_size = company_size;
  data.ed_level = ed_level;
  data.job_title = job_title;
  data.negotiated = negotiated;
  data.salary = salary;
  data.equity = equity;
  data.one_time = one_time;
  data.id = id;
  data.lat = lat;
  data.long = long;
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
