import { Farmer } from "./farmer";

export class Task {

    plantName: String;
    phLevel: String;
    datePlanted: Date;
    farmer: String;
    status: String
    id?: String;
    _class?: String;

    constructor(
        plantName: String,
        phLevel: String,
        datePlanted: Date,
        farmer: String,
        status: String,
        id?: String,
        _class?: String
    ) {
        this.plantName = plantName;
        this.phLevel = phLevel;
        this.datePlanted = datePlanted;
        this.farmer = farmer;
        this.status = status;
        this.id = id;
        this._class = _class;
    }
}
