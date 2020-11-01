import { Droit } from "./droit";
import { Produit } from "./produit";

export class DroitProduit{
    
    produit: Produit;
    droit: Droit;

    constructor(){
        this.produit = new Produit();
        this.droit = new Droit();
    }
}