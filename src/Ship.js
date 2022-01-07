export class Ship {
    constructor(length) {
        this.length = length;
        this.ship = this.createShip();
    }


    //Takes the lenght provided as a lenght and creates an array with as many indexes as the lenght, then asings a key value representing the health
    createShip() {
        let shipArray = [];
        let i = this.length;
        while (i > 0) {
            shipArray.push({ hit: false });
            i--;
        }
        return shipArray;
    }
    getShip() {
        return this.ship;
    }
    getShipLength() {
        return this.ship.length;
    }


    //Takes an index and changes the key value representing the hit to true
    hit(index) {
        return (this.ship[index].hit = true);
    }
    checkHit(item) {
        if (item.hit == true) {
            return true;
        } else {
            return false;
        }
    }

    //If every index has a key with a hit value = hit then returns true and changes the sink status to true
    isSunk() {
        if (this.ship.every(this.checkHit)) {
            return true;
        } else {
            return false;
        }
    }
}
