import mongoose from "mongoose";



let personSchema = new mongoose.Schema({
    nom : String,
    prenom : String,
    age: Number,
    favoriteFoods: [String],
})


let Person = mongoose.model('person', personSchema);

export default Person;