import mongoose from "mongoose";

const server = "127.0.0.1:27017";
const database = "CheckpointMongooseDB"


class Database{
    constructor(){
        this._connect();
    }

    _connect(){
        mongoose.connect(`mongodb://${server}/${database}`).then(() =>{
            console.log("Connexion établie avec succès à la base de données✅")
        })

        .catch((err) =>{
            console.log(err)
        })

    }
}


export default Database;