import {firestore} from "../configs/firebase";

class Contact{
    constructor() {
    }
}

function Model(){
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
    this.createdAt = firestore.FieldValue.serverTimestamp();
    this.read = false
}

export const ContactModel = Model
export default Contact