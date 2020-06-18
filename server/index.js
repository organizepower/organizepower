const { app } = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
// testing app.yaml env variables in gcloud
const testVar = process.env.TESTVAR || '';

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀 ${testVar}`);
});
