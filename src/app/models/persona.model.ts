export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    correo: string;
    img: string;
    titulo: string;
    descripcion: string;


    constructor(nombre: string, apellido: string, correo: string, img: string, titulo: string, descripcion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.img = img;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}