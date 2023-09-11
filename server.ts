import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 3002

app.use('/', express.static("dist"));

app.listen(port, () => {
    console.log(`admin ${port}`)
})