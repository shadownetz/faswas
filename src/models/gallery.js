import {firestore, galleryStore, storage, storageRef} from "../configs/firebase";
import {CustomResponse} from "../utils/globalObjects";

class Gallery{
    constructor(gallery) {
        this.data = Object.assign(new Model(), gallery)
    }

    async save(){
        const image_upload_response = await Gallery.uploadGalleryImage(this.data.image);
        this.data.image = image_upload_response.data.url;
        return galleryStore.add(Object.assign({}, this.data))
    }

    async delete(galleryId){
        await Gallery.deleteGalleryImage(this.data.image);
        return galleryStore.doc(galleryId).delete()
    }

    static async uploadGalleryImage(file){
        const response = new CustomResponse();
        response.data.url = '';
        try{
            const image_ext = file.name.split('.').pop();
            const image_name = `gallery_${new Date().valueOf()}.${image_ext}`
            const imageRef = storageRef.child(`gallery/${image_name}`)
            const upload_snapshot = await imageRef.put(file);
            response.data.url = await upload_snapshot.ref.getDownloadURL();
        }catch (e){
            console.log(e)
            response.set_status(false, e)
        }
        return Promise.resolve(response)
    }
    static async deleteGalleryImage(url){
        const response = new CustomResponse();
        try{
            await storage().refFromURL(url).delete()
        }catch (e){
            console.log(e)
            response.set_status(false, e)
        }
        return Promise.resolve(response)
    }
}


function Model(){
    this.createdAt = firestore.FieldValue.serverTimestamp();
    this.description = '';
    this.image = ''
}

export const GalleryModel = Model
export default Gallery