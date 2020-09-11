export class Invoice {
    constructor(n, a, r) {
        this.details = n;
        this.amount = a;
        this.client = r;
    }
    format() {
        this.amount = 9000;
        return `${this.details} ${this.client} are paid $${this.amount} an hour `;
    }
}
