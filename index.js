const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4hbah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const database = client.db("movie-portal");
    const moviesCollection = database.collection("movies");
    const favoriteMoveCollection = database.collection("favorite-movie");

    app.get("/", (req, res) => {
      res.send("Hello World!");
    });
    app.post("/movie", async (req, res) => {
      const movieData = req.body;
      const result = await moviesCollection.insertOne(movieData);
      res.send(result);
    });
    app.get("/movie", async (req, res) => {
      const movies = await moviesCollection.find().toArray();
      res.send(movies);
    });
    app.get("/movie/:id", async (req, res) => {
      const movieId = req.params.id;
      const movies = await moviesCollection.findOne({
        _id: new ObjectId(movieId),
      });
      res.send(movies);
    });
    app.delete("/movie/:id", async (req, res) => {
      const id = req.params.id;
      const result = await moviesCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });
    app.post("/fav-movie", async (req, res) => {
      const favMovieData = req.body;

      const existingMovie = await moviesCollection.updateOne(
        { _id: new ObjectId(favMovieData._id) },
        {
          $set: { isFavorite: true },
        }
      );

      console.log(existingMovie);

      const result = await favoriteMoveCollection.insertOne(favMovieData);
      res.send(result);
    });
    app.get("/fav-movie/:email", async (req, res) => {
      const userEmail = req.params.email;
      const result = await favoriteMoveCollection
        .find({ email: userEmail })
        .toArray();
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Movie portal app listening on port ${port}`);
});
