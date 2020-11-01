"use strict";
exports.__esModule = true;
var client_1 = require("./client");
var individu_1 = require("./individu");
var entreprise_1 = require("./entreprise");
var DroitProduit_1 = require("./DroitProduit");
var faker = require('faker');
var fs = require('fs');
function gen() {
    var tableau = [];
    for (var index = 0; index < 5; index++) {
        var adresse = faker.address.streetAddress();
        var prenom = faker.name.firstName();
        var nom = faker.name.lastName();
        var email = faker.internet.email();
        var nomEntreprise = faker.company.companyName();
        var phone = faker.phone.phoneNumber();
        var fax = faker.phone.phoneNumber();
        var rue = faker.address.streetName();
        var ville = faker.address.city();
        var province = faker.address.state();
        var c1 = new client_1.Client();
        var i1 = new individu_1.Individu();
        var e1 = new entreprise_1.Entreprise();
        var instance = Math.floor((Math.random() * 3) + 1);
        if (instance == 1) {
            c1.idClient = index;
            c1.adresse = adresse;
            tableau.push({
                "client": c1
            });
        }
        else if (instance == 2) {
            i1.idClient = index;
            i1.adresse = adresse;
            i1.prenom = prenom;
            i1.nom = nom;
            i1.email = email;
            i1.details.rue = rue;
            i1.details.ville = ville;
            i1.details.province = province;
            tableau.push({
                "individu": i1
            });
        }
        else if (instance == 3) {
            e1.idClient = index;
            e1.adresse = adresse;
            e1.nom = nomEntreprise;
            e1.phone = phone;
            e1.fax = fax;
            e1.details.rue = rue;
            e1.details.ville = ville;
            e1.details.province = province;
            e1.contact.prenom = prenom;
            e1.contact.nom = nom;
            e1.contact.email = email;
            tableau.push({
                "entreprise": e1
            });
        }
    }
    for (var index = 0; index < 5; index++) {
        var id = index;
        var dateDebut = faker.date.past();
        var dateFin = faker.date.future();
        var nom = faker.name.firstName();
        var description = faker.commerce.productName();
        var dp1 = new DroitProduit_1.DroitProduit();
        dp1.droit.idDroit = id;
        dp1.droit.dateDebut = dateDebut;
        dp1.droit.dateFin = dateFin;
        dp1.produit.id = id;
        dp1.produit.nom = nom;
        dp1.produit.description = description;
        tableau.push({
            "droitProduit": dp1
        });
    }
    return { "entity": tableau };
}
var dataObj = gen();
fs.writeFileSync('tp.json', JSON.stringify(dataObj, null, '\t'));
