export class Farmer {

    firstName: String;
    lastName: String;
    email: String;
    address: String;
    contactNumber: String;
    id?: String;
    _class?: String;


    constructor(
        firstName: String,
        lastName: String,
        email: String,
        address: String,
        contactNumber: String,
        id?: String,
        _class?: String,
    ) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.contactNumber = contactNumber;
        this.id = id;
        this._class = _class;
    }


}
