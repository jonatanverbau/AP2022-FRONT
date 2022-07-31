export class Skill {
    id?: number;
    nombreSkill: string;
    img: string;
    nivelSkill: number;

    constructor(img: string, nombreSkill: string, nivelSkill: number) {
        this.img = img;
        this.nombreSkill = nombreSkill;
        this.nivelSkill = nivelSkill;
    }
}
