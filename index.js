const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const data = {
    version: 'beta1506',
    date: '15.06.2023'
  };

  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
