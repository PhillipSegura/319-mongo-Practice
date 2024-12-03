console.log("i have been updated");
import db from "./db/conn.mjs";
import express from "express";
import deotenv from "env";
deotenv.config();

//in order to use the grades.mjs for my routes,
// o need to import the file
//then i need to

//process.env is what allows me to access the .env
// PORT is what it was called in the .env file
const PORT = process.env.PORT || 5050;
const app = express();

//middleware
app.use(express.json());

//routes
//generic route that is the root of the application
app.get("/", (req, res) => {
  res.send(
    "welcome to the APT. Documentation could go here, or you could redirect to documentation"
  );
});

app.use("/");

//Global error handling after the routes
app.use((err, _req, res, next) => {
  res.status(500).send("seems like we messed up somewhere");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
