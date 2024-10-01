import { RectangleShape } from "../interfaces/IRectangle";
export declare class Rectangle implements RectangleShape {
    type: string;
    width: number;
    height: number;
    constructor(width: number, height: number);
    findS(): number;
    ShapeType(): void;
}
