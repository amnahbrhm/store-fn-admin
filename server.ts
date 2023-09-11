import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 3002

app.use('/', express.static("dist/store"));

app.listen(port, () => {
    console.log(`admin ${port}`)
})