

export class User{
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any ){
        this.firstName = obj ? obj.firstName : ""; //If Abfrage in einfacher Form
        this.lastName = obj ? obj.lastName : ""; //If Abfrage in einfacher Form
        this.birthDate = obj ? obj.birthDate : ""; //If Abfrage in einfacher Form
        this.street = obj ? obj.street : ""; //If Abfrage in einfacher Form
        this.zipCode = obj ? obj.zipCode : ""; //If Abfrage in einfacher Form
        this.city = obj ? obj.city : ""; //If Abfrage in einfacher Form
    }
}