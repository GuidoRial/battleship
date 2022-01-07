export class GameBoard {
    constructor() {
        this.gameBoardArray = this.createGameBoard();
        this.missedAttacks = [];
    }
    createGameBoard() {
        let outsideArray = [];
        let positionsArray = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                positionsArray.push({
                    shipName: undefined,
                    shipIndex: undefined,
                });
            }
            outsideArray.push(positionsArray);
            positionsArray = [];
        }
        return outsideArray;
        //1. Create two arrays, one (outsideArray) ends up containing the other (positionsArray)
        //2. for (let j...) will add two keys and values to each index of the inner array untill positionsArray has 10 items with undefined shipName and shipIndex
        //3. for (let i...) pushes positionsArray into outsideArray and empties the first one, repeating the process 10 times, ending up with a 10x10 grid like so...
        /* [
            [][][][][][][][][][]
            [][][][][][][][][][]
            [][][][][][][][][][]
            [][][][][][][][][][]
            [][][][][][][][][][]
            [][][][][][][][][][]
            [][][][][][][][][][]
            [][][][][][][][][][]
            [][][][][][][][][][]
            [][][][][][][][][][]
            ]*/
    }
    getGameBoard() {
        return this.gameBoardArray;
    }
    checkIfShipPlacementIsValid(length, x, y) {
        if (x > 10 || x < 0 || y > 10 || y < 0 || y + length > 10) {
            return false;
        } else {
            for (let i = y; i < y + length; i++) {
                if (this.gameBoardArray[i][x].shipName != undefined) {
                    return false;
                }
            }
            return true;
        }
    }
    placeShip(ship, x, y) {
        if (this.checkIfShipPlacementIsValid(ship.getShipLength(), x, y)) {
            for (let i = 0; i < ship.getShipLength(); i++) {
                this.gameBoardArray[y + i][x].shipName = ship;
                this.gameBoardArray[y + i][x].shipIndex = i;
            }
        }
    }
    receiveAttack(x, y) {
        if (this.gameBoardArray[y][x].shipName == undefined) {
            this.missedAttacks.push({ x: x, y: y });
        } else {
            this.gameBoardArray[y][x].shipName.hit(
                this.gameBoardArray[y][x].shipIndex
            );
        }
    }
    getMissedAttacksArray() {
        return this.missedAttacks;
    }

    checkIfAllShipSunk() {
        let key = true;
        this.gameBoardArray.forEach((item) => {
            item.forEach((element) => {
                if (element.shipName) {
                    if (element.shipName.isSunk() == false) {
                        key = false;
                    }
                }
            });
        });
        return key;
    }
}
