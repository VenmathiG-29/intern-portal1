const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const dummyInternData = {
  name: "Venma",
  referralCode: "venma2025",
  totalDonations: 12000
};

const leaderboard = [
  { name: "Venma", totalDonations: 12000 },
  { name: "Ravi", totalDonations: 9800 },
  { name: "Anjali", totalDonations: 7400 }
];

app.get('/api/intern', (req, res) => {
  res.json(dummyInternData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
