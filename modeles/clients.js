const mongoose = require("mongoose");

let schemaClient = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    prets: {
        type: Object,
        required: true
    }
});

let Clients = module.exports = mongoose.model("Clients", schemaClient);

module.exports.getClients = (callback, limit) => {
    Clients.find(callback).limit(limit);
};

module.exports.getClientById = (idClient, callback) => {
    Clients.findById(idClient, callback);
};

//ajouter un Client dans la bd
module.exports.ajouterClient = (Client, callback) => {
    Clients.create(Client, callback);
}

//supprimer un Client
module.exports.deleteClient = (idClient, callback) =>{
    var query = {"_id": idClient};
    Clients.remove(query, callback);
}

module.exports.updateClient = (idClient, client ,callback) =>{
    //console.log("supper")
    var query = {"_id": idClient};
    var options = {};
    var nouveauClient = {
        _id: client._id,
        nom: client.nom,
        prenom: client.prenom,
        adresse: client.adresse,
        tel: client.tel,
        prets: client.prets
    }
    Clients.findOneAndUpdate(query, nouveauClient, options, callback);
}