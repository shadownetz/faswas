import {firestore} from "../configs/firebase";

class Gallery{
    constructor() {

    }
}


function Model(){
    this.createdAt = firestore.FieldValue.serverTimestamp();
    this.description = '';
    this.image = ''
}

export const GalleryModel = Model
export default Gallery