export class Driver {
    name: string;
    age: number;
    licensePlace: string;
    dob: Date;
    carName: string;
    Email: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    getNameValue(): string {
        return this.name;
    }
}