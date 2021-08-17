import {firestore} from "../configs/firebase";

class User{
    constructor() {
    }
}

function Model(){
    this.email = '';
    this.name = '';
    this.phone = '';
    this.address = '';
    this.createdAt = firestore.FieldValue.serverTimestamp()
}

export const UserModel = Model
export default User