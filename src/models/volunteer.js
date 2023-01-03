import {firestore, storage, storageRef, volunteerStore} from "../configs/firebase";
import {CustomResponse} from "../utils/globalObjects";

class Volunteer{
    constructor(volunteer) {
        this.data = Object.assign(new Model(), volunteer);
    }

    async save(){
        const image_upload_response = await Volunteer.uploadVolunteerImage(this.data.image);
        this.data.image = image_upload_response.data.url;
        return volunteerStore.add(Object.assign({}, this.data))
    }
    async update(volunId, prev_volun){
        if(typeof this.data.image !== 'string'){
            await Volunteer.deleteVolunteerImage(prev_volun.data.image)
            const image_upload_response = await Volunteer.uploadVolunteerImage(this.data.image);
            this.data.image = image_upload_response.data.url;
        }
        this.data.updatedAt = firestore.FieldValue.serverTimestamp();
        delete this.data.createdAt
        return volunteerStore.doc(volunId).update(Object.assign({}, this.data))
    }
    async delete(volunId){
        await Volunteer.deleteVolunteerImage(this.data.image);
        return volunteerStore.doc(volunId).delete()
    }
    static async uploadVolunteerImage(file){
        const response = new CustomResponse();
        response.data.url = '';
        try{
            const image_ext = file.name.split('.').pop();
            const image_name = `volunteer_${new Date().valueOf()}.${image_ext}`
            const imageRef = storageRef.child(`volunteer/images/${image_name}`)
            const upload_snapshot = await imageRef.put(file);
            response.data.url = await upload_snapshot.ref.getDownloadURL();
        }catch (e){
            console.log(e)
            response.set_status(false, e)
        }
        return Promise.resolve(response)
    }
    static async deleteVolunteerImage(url){
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
    this.name = '';
    this.email = '';
    this.phone = '';
    this.createdAt = firestore.FieldValue.serverTimestamp();
    this.updatedAt = firestore.FieldValue.serverTimestamp();
    this.position = '';
    this.image = '';
    this.social = {
        facebook: '',
        twitter: '',
        instagram: '',
        whatsapp: ''
    };
    this.status = 'PENDING'; // PENDING, ACCEPTED, REJECTED
}

export const VolunteerModel = Model
export default Volunteer