export class persona{
    id?: number;
    nombre: string;
    mail: string;
    img: string;
    titulo: string;


    constructor(nombre: string, titulo: string, mail: string, img: string){
        this.nombre = nombre;
        this.mail = mail;
        this.img = img;
        this.titulo = titulo;
    }
}