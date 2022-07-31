export class Educacion {
    id?: number;
    nombreEdu: string; 
    lugarEdu: string;
    img: string;
    descEdu: string;

    constructor(nombreEdu: string, lugarEdu: string, img: string, descEdu: string) {
        this.nombreEdu = nombreEdu;
        this.lugarEdu = lugarEdu;
        this.img = img;
        this.descEdu = descEdu;
    }
}
