const express = require('express')
const app = express()
require("dotenv").config();
app.use(express.json());
const bcrypt = require('bcrypt');

var db;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_ATLAS;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    db = client.db("NourvaData");
    // Send a ping to confirm a successful connection
    await db.command({ ping: 1 });
    console.log("Backend server connected to database.");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
    //console.log("Database connection closed");
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);

  // Hash the password using bcrypt
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  // Store hash in your password DB.

  // Insert the user into the database
  const result = await db.collection('users').insertOne({ username, password: hash });

  res.json({ message: 'User registered successfully' });
});

// Route to handle user login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await db.collection('users').findOne({ username });

  console.log(user.password);

  // If user doesn't exist or password is incorrect, return an error
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // User authenticated successfully, generate a JWT
  // const token = jwt.sign({ userId: user._id }, 'your-secret-key');

  res.json({ message: 'User loggged in successfully' });
});

// Middleware to authenticate requests
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  // Verify the JWT
  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Attach the decoded user ID to the request object
    req.userId = decoded.userId;
    next();
  });
};

// Protected route that requires authentication
app.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

app.listen(5000, '127.0.0.1',() => {
    console.log("Backend server started on port 5000")
})