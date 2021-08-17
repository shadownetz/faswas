import {firestore} from "../configs/firebase";

class Volunteer{
    constructor() {
    }
}

function Model(){
    this.name = '';
    this.createdAt = firestore.FieldValue.serverTimestamp();
    this.position = '';
    this.image = '';
    this.social = {
        facebook: '',
        twitter: '',
        instagram: '',
        whatsapp: ''
    }
}

export const VolunteerModel = Model
export default Volunteer