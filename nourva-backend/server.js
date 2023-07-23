const express = require('express')
const app = express()
require("dotenv").config();
app.use(express.json());
const bcrypt = require('bcrypt');
var cors = require('cors');
app.use(cors());
const jwt = require('jsonwebtoken');

var db;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_ATLAS;
let refreshTokens = []

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

  const user = await db.collection('users').findOne({ username });

  if (!user) {
    // Hash the password using bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    // Store hash in your password DB.

    // Insert the user into the database
    const result = await db.collection('users').insertOne({ username, password: hash });
    const userN = { name: username };

    // User authenticated successfully, generate a JWT
    const accessToken = generateAccessToken(userN);
    //const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    // refreshTokens.push(refreshToken);

    res.json({ message: "User registered sucessfully", accessToken: accessToken });
  }
  else {
    res.sendStatus(403);
  }
});

// Route to handle user login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await db.collection('users').findOne({ username });

  // If user doesn't exist or password is incorrect, return an error
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const userN = { name: username };

  // User authenticated successfully, generate a JWT
  const accessToken = generateAccessToken(userN);
  //const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  //refreshTokens.push(refreshToken);

  //res.json({accessToken: accessToken, refreshToken: refreshToken});
  res.json({ accessToken: accessToken, message: "Login sucessful!" });
});

function authenticateToken(req, res, next) {
  const token = req.body.authorization || req.query.authorization;
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// replace /path with whatever is supposed to get access to
app.get('/query-foods', authenticateToken, (req, res) => {

})

app.get('/get-user-data', authenticateToken, async (req, res) => {

  var user = await db.collection('users').findOne({username: (jwt.decode(req.query.authorization)).name});

  if(user){
    res.send(user);
  }
  else{
    res.send({message: "user does not exist"});
  }
})

function calculateTDEE(weight, height, age, sex, bodyfat = 20) {
  var tdee;
  if (sex === "male") {
    tdee = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  }
  else if (sex === "female") {
    tdee = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
  else {
    tdee = 370 + (21.6 * (1 - bodyfat)) * weight;
  }
  return tdee;
}

app.post('/add-user-data', authenticateToken, async (req, res) => {
  const { authorization, firstName, lastName, age, sex, height, weight, bodyfat, activityLevel, goal } = req.body;

  var user = jwt.decode(authorization);
  if (user) {
    var tdee = calculateTDEE(weight, height, age, sex, bodyfat);
    const result = await db.collection('users').updateOne({ username: user.name },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
          age: age,
          sex: sex,
          height: height,
          weight: weight,
          bodyfat: bodyfat,
          activityLevel: activityLevel,
          goal: goal,
          tdee: tdee,
          dailyCalories: 0
        },
      })
    res.sendStatus(200);
  };
})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30d' });
}

app.post('/token', (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);

  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  })
})

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token);
  res.sendStatus(204);
})

app.listen(5000, '127.0.0.1', () => {
  console.log("Backend server started on port 5000")
})