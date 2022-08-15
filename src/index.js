import app from './app.js';
import { createConnection } from './db.js'

createConnection()

app.listen(3000);
console.log("Server on port 3000");
