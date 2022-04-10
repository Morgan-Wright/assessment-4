const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/useless", (req, res) => {
  const alerts = ["told you so", "you thought I was kidding", "this button reflects existence"];

  let randomIndex = Math.floor(Math.random() * alerts.length);
  let randomAlert = alerts[randomIndex];

  res.status(200).send(randomAlert);
});

app.get("/api/chicken", (req, res) => {
  const dialog = ["cock-a-doodle-doo", "what came first me or the egg?", "why do you people turn me into nuggets"];
  let randomIndex = Math.floor(Math.random() * dialog.length);
  let randomDialog = dialog[randomIndex];
  
  res.status(200).send(randomDialog);
});

app.listen(4000, () => console.log("Server running on 4000"));
