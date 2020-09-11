export class Payment {
    constructor(n, a, r) {
        this.details = n;
        this.amount = a;
        this.recipient = r;
    }
    format() {
        this.amount = 9000;
        return `${this.details} ${this.recipient} are owed $${this.amount} an hour `;
    }
}
