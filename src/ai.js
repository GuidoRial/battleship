import { Player } from "./Player";

export class AI extends Player {
    constructor(name, enemyPlayer, enemyBoard) {
        super(name, enemyBoard);
        this.turn = false;
        this.enemyPlayer = enemyPlayer;
        this.enemyBoard = enemyBoard;
        this.attackArray = [];
    }

    generateRandomAttack() {
        //If it's the computer turn...
        if (this.checkTurn()) {
            //Create an object representing the coordinates
            let numberObject = { x: undefined, y: undefined };
            while (true) {
                //Create a random number between 0 and 10 and assign it to x and y
                let firstNumber = Math.floor(Math.random() * 10);
                let secondNumber = Math.floor(Math.random() * 10);
                numberObject.x = firstNumber;
                numberObject.y = secondNumber;
                //If the AI didn't attack those coordinates already...
                if (
                    !this.attackArray.some(
                        (e) => e.x == numberObject.x && e.y == numberObject.y
                    )
                ) { //...attack
                    this.attackArray.push(numberObject);
                    this.attack(
                        numberObject.x,
                        numberObject.y,
                        this.enemyPlayer,
                        this.enemyBoard
                    );
                    break;
                }
            }
        }
    }

    getAttackArray() {
        return this.attackArray;
    }
}
