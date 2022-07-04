export class Randomizer {
    currentPosition;
    tetrominos;
    constructor() {
        this.currentPosition = 0;
        this.tetrominos = [];
    }

    add(tetromino, amount) {
        for (let i = 0; i < amount; i++) {
            this.tetrominos.push(tetromino);
        }
        this.currentPosition = this.tetrominos.length - 1;
    }

    next() {
        if (this.currentPosition < 1) {
            this.currentPosition = this.tetrominos.length - 1;
            return this.tetrominos[0];
        }
        let pos = Math.floor(Math.random() * this.currentPosition);
        let currentItem = this.tetrominos[pos];
        this.tetrominos[pos] = this.tetrominos[this.currentPosition];
        this.tetrominos[this.currentPosition] = currentItem;
        this.currentPosition--;

        return currentItem;
    }

}