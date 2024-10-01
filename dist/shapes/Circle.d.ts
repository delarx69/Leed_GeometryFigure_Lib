import { CircleShape } from "../interfaces/ICircle";
export declare class Circle implements CircleShape {
    type: string;
    radius: number;
    constructor(radius: number);
    findD(): number;
    ShapeType(): void;
}
