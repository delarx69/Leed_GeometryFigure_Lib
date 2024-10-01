import { CircleShape } from "../interfaces/ICircle";

    export class Circle implements CircleShape{
        type:string;
        radius: number;

        constructor(radius:number){

            if(radius === undefined){
            
                throw new Error('Введите все значения!');
            }
            else if(radius <=0){
                throw new Error('Радиус не должен быть отрицательным!');
            }
            else{
                this.type = "Круг";
                this.radius = radius;
            }
        }

        public findD():number{
            return this.radius * 2;
        }

        public ShapeType():void{
            console.log(`Выбранная фигура - ${this.type}`);
        }

    }