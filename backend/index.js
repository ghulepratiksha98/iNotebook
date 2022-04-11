const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = 5000

//middleware to access res.body
app.use(express.json());

//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// app.get('/', (req, res) => 
//   res.send('Hello World!')
// )
// app.get('/api/v1/login', (req, res) => 
//   res.send('Hello login!')
  
// )
// app.get('/api/v1/signup', (req, res) => 
//   res.send('Hello sigbnup!')
// )
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
