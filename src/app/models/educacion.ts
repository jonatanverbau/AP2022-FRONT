export class Educacion {
    id?: number;
    nombreEdu: string; 
    lugarEdu: string;
    anioEdu: number;
    img: string;
    descEdu: string;

    constructor(nombreEdu: string, lugarEdu: string,anioEdu: number, img: string, descEdu: string) {
        this.nombreEdu = nombreEdu;
        this.lugarEdu = lugarEdu;
        this.anioEdu = anioEdu;
        this.img = img;
        this.descEdu = descEdu;
    }
}
