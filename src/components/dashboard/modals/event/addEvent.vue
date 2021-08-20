<template>
    <div class="modal fade" id="addEventModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" ref="addEvent">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Event</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div class="event-image">
                            <img id="ev-img" src="../../../../assets/logos/calendar.png" alt="event image">
                        </div>
                        <div class="col-12 text-center mt-4">
                            <label for="up-eve-img" class="btn btn-outline-dark">
                                Upload image
                                <input @change="uploadFile" id="up-eve-img" type="file" accept="image/*">
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Title</label>
                                <input v-model="event.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Event Title">
                                <small id="emailHelp" class="form-text text-muted">What is this event all about?</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Scheduled for</label>
                                <input v-model="event.scheduledFor" type="datetime-local" class="form-control">
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
import {EventModel} from "../../../../models/event";
import CalenderImage from "../../../../assets/logos/calendar.png"

export default {
    name: "addEvent",
    data(){
        return {
            event: new EventModel()
        }
    },
    methods: {
        uploadFile(event){
            const file = event.target.files[0];
            const file_ext = file.name.split('.').pop().toLowerCase();
            if($.inArray(file_ext, ['png', 'jpeg', 'jpg']) >= 0){
                const reader = new FileReader();
                reader.onload = (e)=>{
                    $('#ev-img').attr('src', e.target.result)
                };
                reader.readAsDataURL(file);
                this.event.image = file;
            }else{
                alert("Please upload a valid image")
            }
        },
        async uploadEvent(){
            if(!this.event.image){
                return alert("Upload an image for this event")
            }else if(!this.event.title || !this.event.scheduledFor){
                return alert("Complete all fields")
            }
            const loading = this.$loading.show({container: this.$refs.addEvent});
            const response = await this.$store.dispatch('event/addEvent', this.event);
            loading.hide();
            if(response.status){
                $('#addEventModal').modal('hide')
                alert("Operation successful");
            }else{
                alert(response.message)
            }
        }
    },
    mounted(){
        const AddEventmodal = $('#addEventModal');
        AddEventmodal.modal({
            backdrop: 'static',
            show: false
        });
        AddEventmodal.on('hide.bs.modal', ()=>{
            this.event = new EventModel();
            $('#ev-img').attr('src', CalenderImage);
            $('#up-eve-img').val("")
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