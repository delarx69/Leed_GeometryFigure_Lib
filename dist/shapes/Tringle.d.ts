import { TringleShape } from "../interfaces/ITringle";
export declare class Tringle implements TringleShape {
    type: string;
    founded: number;
    height: number;
    constructor(founded: number, height: number);
    findS(): number;
    ShapeType(): void;
}
