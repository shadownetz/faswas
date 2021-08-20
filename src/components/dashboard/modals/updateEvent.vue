<template>
    <div class="modal fade" id="updateEventModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" ref="updateEvent">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{event.data.title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div class="event-image">
                            <img class="ev-img" :src="event.data.image" alt="event image" v-if="event.data.image">
                            <img v-else class="ev-img" src="../../../assets/logos/calendar.png" alt="event image">
                        </div>
                        <div class="col-12 text-center mt-4">
                            <label for="up-eve-1-img" class="btn btn-outline-dark">
                                Update image
                                <input @change="uploadFile" id="up-eve-1-img" type="file" accept="image/*">
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Title</label>
                                <input v-model="event.data.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Event Title">
                                <small id="emailHelp" class="form-text text-muted">What is this event all about?</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Scheduled for</label>
                                <input v-model="event.data.scheduledFor" type="datetime-local" class="form-control">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="uploadEvent">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {EventModel} from "../../../models/event";
import CalenderImage from "../../../assets/logos/calendar.png"

export default {
    name: "updateEvent",
    data(){
        return {}
    },
    props: {
        event: {
            type: Object,
            default: ()=>({id: '', data: new EventModel()})
        },
        prevEvent: {
            type: Object,
            required: true
        }
    },
    methods: {
        uploadFile(event){
            const file = event.target.files[0];
            const file_ext = file.name.split('.').pop().toLowerCase();
            if($.inArray(file_ext, ['png', 'jpeg', 'jpg']) >= 0){
                const reader = new FileReader();
                reader.onload = (e)=>{
                    $('.ev-img').attr('src', e.target.result)
                };
                reader.readAsDataURL(file);
                this.event.data.image = file;
            }else{
                alert("Please upload a valid image")
            }
        },
        async uploadEvent(){
            if(!this.event.data.image){
                return alert("Upload an image for this event")
            }else if(!this.event.data.title || !this.event.data.scheduledFor){
                return alert("Complete all fields")
            }
            const loading = this.$loading.show({container: this.$refs.updateEvent});
            const response = await this.$store.dispatch('event/updateEvent', {
                u_event:this.event,
                o_event: this.prevEvent
            });
            loading.hide();
            if(response.status){
                $('#updateEventModal').modal('hide')
                alert("Operation successful");
            }else{
                alert(response.message)
            }
        }
    },
    mounted(){
        const UpateEventmodal = $('#updateEventModal');
        UpateEventmodal.modal({
            backdrop: 'static',
            show: false
        });
        UpateEventmodal.on('hide.bs.modal', ()=>{
            this.event = new EventModel();
            $('.ev-img').attr('src', CalenderImage);
            $('#up-eve-1-img').val("")
        })
    }
}
</script>

<style scoped>
.event-image{
    width: 200px;
    height: 200px;
    border-radius: 10px;
}
.event-image img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
input[type='file']{
    position: absolute;
    visibility: hidden;
}
</style>