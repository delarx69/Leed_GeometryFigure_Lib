export class Tringle {
    constructor(founded, height) {
        this.type = "Триугольник";
        this.founded = founded;
        this.height = height;
    }
    findS() {
        return 0.5 * this.founded * this.height;
    }
    ShapeType() {
        console.log(`Выбранная фигура - ${this.type}`);
    }
}
