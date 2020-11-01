"use strict";
exports.__esModule = true;
exports.DroitProduit = void 0;
var droit_1 = require("./droit");
var produit_1 = require("./produit");
var DroitProduit = /** @class */ (function () {
    function DroitProduit() {
        this.produit = new produit_1.Produit();
        this.droit = new droit_1.Droit();
    }
    return DroitProduit;
}());
exports.DroitProduit = DroitProduit;
