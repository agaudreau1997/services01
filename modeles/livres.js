const mongoose = require("mongoose");

// schema de donnees pour les livres
// _id, titre, auteur, résumé, prix, éditeur, pages, langue, date

let schemaLivre = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    titre: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: true
    },
    résumé: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    éditeur: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: false
    },
    langue: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
});

let Livres = module.exports = mongoose.model("Livres", schemaLivre);

//obtenir les livres de la bd

module.exports.getLivres = (callback, limit) => {
    Livres.find(callback).limit(limit);
};

module.exports.getLivreById = (idLivre, callback) => {
    Livres.findById(idLivre, callback);
};

//ajouter un livre dans la bd
module.exports.ajouterLivre = (livre, callback) => {
    Livres.create(livre, callback);
}

//supprimer un livre
module.exports.deleteLivre = (idLivre, callback) =>{
    var query = {"_id": idLivre};
    Livres.remove(query, callback);
}

//modifier un livre
module.exports.updateLivre = (idLivre, livre ,callback) =>{
    var query = {"_id": idLivre};
    var options = {};
    var nouveauLivre = {
        _id: livre._id,
        titre: livre.titre,
        auteur: livre.auteur,
        résumé: livre.résumé,
        éditeur: livre.éditeur,
        pages: livre.pages,
        langue: livre.langue,
        date: livre.date,
        prix: livre.prix,
        genre: livre.genre
    }
    Livres.findOneAndUpdate(query, nouveauLivre, options, callback);
}