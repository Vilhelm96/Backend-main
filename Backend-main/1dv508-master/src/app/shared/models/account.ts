export class Account {
    id: string;
    name: string = '';
    admin: boolean = false;
    phoneNumber: string = '';
    email: string = '';
    creationTime: string = '';


    constructor(id, email) {
        this.id = id;
        this.email = email;
    }
}
