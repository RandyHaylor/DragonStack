const app = require('../app');

const port = 3001;
console.log("caller is " + this.caller);
app.listen(port, () => console.log(`listening on port ${port}`));