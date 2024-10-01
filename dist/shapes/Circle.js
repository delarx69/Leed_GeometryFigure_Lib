export class Circle {
    constructor(radius) {
        if (radius === undefined) {
            throw new Error('Введите все значения!');
        }
        else if (radius <= 0) {
            throw new Error('Радиус не должен быть отрицательным!');
        }
        else {
            this.type = "Круг";
            this.radius = radius;
        }
    }
    findD() {
        return this.radius * 2;
    }
    ShapeType() {
        console.log(`Выбранная фигура - ${this.type}`);
    }
}
