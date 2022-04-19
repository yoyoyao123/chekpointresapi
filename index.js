import Database from "./src/Database/dbConfig.js"
import express from "express";
import routes from "./src/routes/PersonRoute.js";
import bodyParser from 'body-parser';


const app = express();
const PORT = 4000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})
    
    )


// connexion à l base de donnée
new Database();

app.use(routes);


app.listen(PORT,(err) => {
    console.log(`Le server tourne sur le port 127.0.0.1:${PORT}`)
});