const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;


app.use(cors());
app.use(express.json());

const balances = {
  "0xdd3e1a502253a540a0948ee91dd8e7097343dca9": 100,
  "0x0c9a2c707e181e55ff3ce1d7c71c8a2cdac051f6": 50,
  "0x2c489859c3f7e8290987b868b03d883b3ef827c0": 75,
};


app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount} = req.body;
  


  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
