export class Produit{
    
    id: number;
    nom: string;
    description: string;
    produit: Produit;

    constructor(){
        this.id = undefined;
        this.nom = undefined;
        this.description = undefined;
        this.produit = undefined;
    }
}