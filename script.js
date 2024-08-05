const votingForm = document.getElementById('voting-form');
const candidateSelect = document.getElementById('candidate');
const voteButton = document.getElementById('vote-button');
const resultsDiv = document.getElementById('results');

let votes = {
  "Candidate 1": 0,
  "Candidate 2": 0,
  "Candidate 3": 0
};

voteButton.addEventListener('click', castVote);

function castVote() {
  const selectedCandidate = candidateSelect.value;
  votes[selectedCandidate]++;
  updateResults();
}

function updateResults() {
    let resultsHtml = '';
    for (const candidate in votes) {
      resultsHtml += ${candidate}: ${votes[candidate]} votes<br>;
    }
    resultsDiv.innerHTML = resultsHtml;
  }