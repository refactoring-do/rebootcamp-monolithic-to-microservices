const mongoose = require('mongoose');
const { PORT, SERVICE_NAME, MONGO_URI } = require('./src/config');
const app = require('./src/app');

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`${SERVICE_NAME} running on port ${PORT}`);
    });
  })
  .catch(console.log);
