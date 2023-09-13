import express, { Express, Request, Response } from 'express';
import path from 'path';
const app: Express = express();
const port = 3003

// app.use('/', express.static("dist/store-fn-admin"));
// app.use('/admin', express.static("dist/store-fn-admin"));
app.use('/admin', express.static(path.join(__dirname, "dist")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`admin ${port}`)
})


