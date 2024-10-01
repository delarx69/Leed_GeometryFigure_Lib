export class Rectangle {
    constructor(width, height) {
        if (width === undefined || height === undefined) {
            throw new Error('Введите все значения!');
        }
        else if ((width <= 0 || height <= 0)) {
            throw new Error('Ширина и длина должны быть положительными!');
        }
        else {
            this.type = "Прямоугольник";
            this.width = width;
            this.height = height;
        }
    }
    findS() {
        return this.width * this.height;
        // console.log(`Площадь ${this.type} = ${this.width*this.height}`)
    }
    ShapeType() {
        console.log(`Выбранная фигура - ${this.type}`);
    }
}
