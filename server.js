const express = require('express');
const app = express();

const votes = {
  "candidate1": 0,
  "candidate2": 0,
  "candidate3": 0
};

app.post('/vote', (req, res) => {
  const candidate = req.body.candidate;
  votes[candidate]++;
  res.send(Voted for ${candidate}!);
});

app.get('/results', (req, res) => {
  res.json(votes);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/voting-machine', { useNewUrlParser: true, useUnifiedTopology: true });

const voteSchema = new mongoose.Schema({
  candidate: String,
  count: Number
});

const Vote = mongoose.model('Vote', voteSchema);

app.post('/vote', (req, res) => {
  const candidate = req.body.candidate;
  Vote.findOneAndUpdate({ candidate }, { $inc: { count: 1 } }, { new: true }, (err, vote) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error voting');
    } else {
      res.send(Voted for ${candidate}!);
    }
  });
});
