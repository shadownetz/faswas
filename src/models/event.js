import {eventStore, firestore, storage, storageRef} from "../configs/firebase";
import {CustomResponse} from "../utils/globalObjects";

class Event{
    constructor(event) {
        this.data = Object.assign(new Model(), event);
    }

    async save(){
        this.data.scheduledFor = firestore.Timestamp.fromDate(new Date(this.data.scheduledFor));
        const image_upload_response = await Event.uploadEventImage(this.data.image);
        this.data.image = image_upload_response.data.url;
        return eventStore.add(Object.assign({}, this.data))
    }
    async update(eventId, prev_event){
        if(typeof this.data.scheduledFor === 'string'){
            this.data.scheduledFor = firestore.Timestamp.fromDate(new Date(this.data.scheduledFor));
        }
        if(typeof this.data.image !== 'string'){
            await Event.deleteEventImage(prev_event.data.image)
            const image_upload_response = await Event.uploadEventImage(this.data.image);
            this.data.image = image_upload_response.data.url;
        }
        delete this.data.createdAt
        return eventStore.doc(eventId).update(Object.assign({}, this.data))
    }
    async delete(eventId){
        await Event.deleteEventImage(this.data.image);
        return eventStore.doc(eventId).delete()
    }
    static async uploadEventImage(file){
        const response = new CustomResponse();
        response.data.url = '';
        try{
            const image_ext = file.name.split('.').pop();
            const image_name = `event_${new Date().valueOf()}.${image_ext}`
            const imageRef = storageRef.child(`EventImages/${image_name}`)
            const upload_snapshot = await imageRef.put(file);
            response.data.url = await upload_snapshot.ref.getDownloadURL();
        }catch (e){
            console.log(e)
            response.set_status(false, e)
        }
        return Promise.resolve(response)
    }
    static async deleteEventImage(url){
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
    this.scheduledFor = ''
    this.title = '';
    this.image = '';
}

export const EventModel = Model
export default Event