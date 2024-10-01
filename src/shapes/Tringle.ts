import { TringleShape } from "../interfaces/ITringle";

export class Tringle implements TringleShape{

    type: string;
    founded: number;
    height: number;

    constructor(founded:number, height:number){

        this.type = "Триугольник";
        this.founded = founded;
        this.height = height;

    }

    public findS():number{
        return 0.5 * this.founded * this.height
    }

    public ShapeType():void{
        console.log(`Выбранная фигура - ${this.type}`);
    }

}