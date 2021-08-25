import {contactStore, firestore} from "../configs/firebase";

class Contact{
    constructor(contact) {
        this.data = Object.assign(new Model(), contact)
    }

    addContact(){
        return contactStore.add(Object.assign({}, this.data))
    }

    updateContact(id, new_data){
        return contactStore.doc(id).update(Object.assign({}, new_data))
    }

    deleteContact(id){
        return contactStore.doc(id).delete()
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