const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Livres = require("./modeles/livres");
const Clients =require("./modeles/clients");
const Genres = require("./modeles/genres");

app.use(express.json());

mongoose.connect("mongodb://localhost/labo01");
let db = mongoose.connection;

db.on("error", (err) => {
    console.log("erreur de bd: " + err);
});
db.once("open", () => {
    console.log("connection a la bd avec succes")
});

app.get("/", (requete, reponse) => {
    reponse.send("utilisez /api/livres pour voir les livres");
});

app.get("/api/livres", (requete, reponse) => {
    //requete a mongodb pour chercher les livres
    Livres.getLivres((err, livres) => {
        if (err) throw err;
        reponse.json(livres);
    }, 25);
});

app.get("/api/Clients", (requete, reponse) => {
    //requete a mongodb pour chercher les clients
    Clients.getClients((err, clients) => {
        if (err) throw err;
        reponse.json(clients);
    }, 25);
});

app.get("/api/genres", (requete, reponse) => {
    //requete a mongodb pour chercher les genres
    Genres.getGenres((err, genres) => {
        if (err) throw err;
        reponse.json(genres);
    }, 25);
});

app.get("/api/livres/:idLivre", (requete, reponse) => {
    //requete a mongodb pour chercher un seul livre
    Livres.getLivreById(requete.params.idLivre, (err, livres) => {
        if (err) throw err;
        reponse.json(livres);
    });
});

app.get("/api/genres/:idGenre", (requete, reponse) => {
    //requete a mongodb pour chercher un seul genre
    Genres.getGenreById(requete.params.idGenre, (err, genres) => {
        if (err) throw err;
        reponse.json(genres);
    });
});

app.get("/api/clients/:idClient", (requete, reponse) => {
    //console.log("sup")
    //requete a mongodb pour chercher un seul client
    Clients.getClientById(requete.params.idClient, (err, clients) => {
        if (err) throw err;
        reponse.json(clients);
    });
});

app.post("/api/livres", (requete, reponse) => {
    //requete pour ajouter un livre
    let livre = requete.body;
    Livres.ajouterLivre(livre, (err, livre) => {
        if (err) throw err;
        reponse.json(livre);
    })
});

app.post("/api/genres", (requete, reponse) => {
    //requete pour ajouter un genre
    let genre = requete.body;
    Genres.ajouterGenre(genre, (err, genre) => {
        if (err) throw err;
        reponse.json(genre);
    })
});

app.post("/api/clients", (requete, reponse) => {
    //requete pour ajouter un client
    let client = requete.body;
    Clients.ajouterClient(client, (err, client) => {
        if (err) throw err;
        reponse.json(client);
    })
});

app.delete("/api/livres/:idLivre", (requete, reponse) => {
    //requete a mongodb pour supprimer un seul livre
    Livres.deleteLivre(requete.params.idLivre, (err, livres) => {
        if (err) throw err;
        reponse.json(livres);
    });
});

app.delete("/api/clients/:idClient", (requete, reponse) => {
    console.log("sup");
    //requete a mongodb pour supprimer un seul client
    Clients.deleteClient(requete.params.idClient, (err, clients) => {
        if (err) throw err;
        reponse.json(clients);
    });
});

app.delete("/api/genres/:idGenre", (requete, reponse) => {
    console.log("sup");
    //requete a mongodb pour supprimer un seul genre
    Genres.deleteGenre(requete.params.idGenre, (err, genres) => {
        if (err) throw err;
        reponse.json(genres);
    });
});

app.put("/api/livres/:idLivre", (requete, reponse) => {
    //requete a mongodb pour modifier un livre
    let livre = requete.body;
    Livres.updateLivre(requete.params.idLivre, livre, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

app.put("/api/clients/:idClient", (requete, reponse) => {
    //console.log("sup")
    //requete a mongodb pour modifier un client
    let client = requete.body;
    Clients.updateClient(requete.params.idClient, client, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

app.put("/api/genres/:idGenre", (requete, reponse) => {
    //console.log("sup")
    //requete a mongodb pour modifier un genre
    let genre = requete.body;
    Genres.updateGenre(requete.params.idGenre, genre, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

app.patch("/api/livres/:idLivre", (requete, reponse) => {
    //requete a mongodb pour modifier un livre
    let livre = requete.body;
    Livres.updateLivre(requete.params.idLivre, livre, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

app.patch("/api/clients/:idClient", (requete, reponse) => {
    //console.log("sup")
    //requete a mongodb pour modifier un client
    let client = requete.body;
    Clients.updateClient(requete.params.idClient, client, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

app.patch("/api/genres/:idGenre", (requete, reponse) => {
    //console.log("sup")
    //requete a mongodb pour modifier un genre
    let genre = requete.body;
    Genres.updateGenre(requete.params.idGenre, genre, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

app.listen(8000);
console.log("service web lancé sur le port 8000")

console.log("Hello projet 01");