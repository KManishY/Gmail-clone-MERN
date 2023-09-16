

import express from 'express';
import Connection from './database/db.js';
import routes from './routes/route.js';
import cors from 'cors';



const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use('/',routes);

const PORT = 8000

Connection();

app.listen(PORT,() => {
    console.log("start server",PORT);
});