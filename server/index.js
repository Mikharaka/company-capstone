const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const { mongoose } = require('mongoose')
const app = express();
const cookieParser = require('cookie-parser')
// const { Storage } = require('@google-cloud/storage');
// const crypto = require('crypto');
// const fs = require('fs');

// const credentials = JSON.parse(fs.readFileSync('service-account.json'));

function signRequest(uri) {
    const timestamp = Date.now() / 1000;
    const payload = `${uri}\n${timestamp}`;
    const signature = crypto.createHmac('sha256', credentials.private_key)
      .update(payload)
      .digest('hex');
    return `GOOG4 ${credentials.client_email}:${signature}`;
  }

// const storage = new Storage({
//   credentials,
//   projectId: credentials.project_id,
// });

// const bucket = storage.bucket('wowrack-dataset');
// const file = bucket.file('coworking-space.v1i.yolov8/README.dataset.txt');
// bucket.getFiles().then(files => console.log(files));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected'))
.catch(() => console.log('Database not connected', err))

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/authRoutes'))

const port= 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))