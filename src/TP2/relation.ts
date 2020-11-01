import { DroitProduit } from "./DroitProduit";

const faker = require('faker');
const fs = require('fs');

function relationGen(){

     var tableau = [];

     for(var index = 0; index < 5 ;index++){

          var id = index;
          var dateDebut = faker.date.past();
          var dateFin = faker.date.future();
          var nom = faker.name.firstName();
          var description = faker.commerce.productName();

          var dp1 = new DroitProduit();
          
          dp1.droit.idDroit = id;
          dp1.droit.dateDebut = dateDebut;
          dp1.droit.dateFin = dateFin;
          dp1.produit.id = id;
          dp1.produit.nom = nom;
          dp1.produit.description = description;
          
     }    
     return {"relation": tableau}
}

let dataObj = relationGen();
fs.writeFileSync('tp.json', JSON.stringify(dataObj, null, '\t'));