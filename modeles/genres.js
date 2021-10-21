const mongoose = require("mongoose");

let schemaGenres = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    nom:{
        type: String,
        required: true
    }
});

let Genres = module.exports = mongoose.model("Genres", schemaGenres);

module.exports.getGenres = (callback, limit) => {
    Genres.find(callback).limit(limit);
};

module.exports.getGenreById = (idGenre, callback) => {
    Genres.findById(idGenre, callback);
};

//ajouter un Genre dans la bd
module.exports.ajouterGenre = (Genre, callback) => {
    Genres.create(Genre, callback);
}

//supprimer un Genre
module.exports.deleteGenre = (idGenre, callback) =>{
    var query = {"_id": idGenre};
    Genres.remove(query, callback);
}

module.exports.updateGenre = (idGenre, genre ,callback) =>{
    //console.log("supper")
    var query = {"_id": idGenre};
    var options = {};
    var nouveauGenre = {
        _id: genre._id,
        nom: genre.nom,
    }
    Genres.findOneAndUpdate(query, nouveauGenre, options, callback);
}