export class Proyecto {


    id?: number;
    imgProy: String;
    nombreProy: String;
    descProy: String;
    urlProy: String;

    constructor(imgProy: String, nombreProy: String, descProy: String, urlProy: String) {

        this.imgProy = imgProy;
        this.nombreProy = nombreProy;
        this.descProy = descProy;
        this.urlProy = urlProy;

    }
    
}
