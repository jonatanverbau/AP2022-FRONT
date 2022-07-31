export class Experiencia {
    id? : number;
    nombreExp: string; 
    lugarExp: string;
    anioIniExp: number;
    anioFinExp: number;
    imgExp: string;
    descExp: string;
    
    constructor(nombreExp: string, lugarExp:string, anioIniExp:number, anioFinExp:number,imgExp:string, descExp: string){
        this.nombreExp = nombreExp;
        this.lugarExp = lugarExp;
        this.anioIniExp = anioIniExp;
        this.anioFinExp = anioFinExp;
        this.imgExp = imgExp;
        this.descExp = descExp;
    }
}