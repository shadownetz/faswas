<template>
    <div class="modal fade" id="updateVolunteerModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document" ref="updateVolunteer">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{volunteer.data.name}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div class="event-image">
                            <img class="ev-img" :src="volunteer.data.image" alt="event image" v-if="volunteer.data.image">
                            <img v-else class="ev-img" src="../../../../assets/logos/user.png" alt="user image">
                        </div>
                        <div class="col-12 text-center mt-4">
                            <label for="up-eve-1-img" class="btn btn-outline-dark">
                                Update profile photo
                                <input @change="uploadFile" id="up-eve-1-img" type="file" accept="image/*">
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <form>
                            <div class="form-group">
                                <label>Name</label>
                                <input v-model="volunteer.data.name" type="text" class="form-control" placeholder="Name">
<!--                                <small id="emailHelp" class="form-text text-muted">What is this event all about?</small>-->
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input v-model="volunteer.data.phone" type="tel" class="form-control" placeholder="Phone Number">
                            </div>
                            <div class="form-group">
                                <label>Email Address</label>
                                <input v-model="volunteer.data.email" type="email" class="form-control" placeholder="Email Address">
                            </div>
                            <div class="form-group">
                                <label>Position</label>
                                <input v-model="volunteer.data.position" type="text" class="form-control" placeholder="Position">
                                <!--                                <small id="emailHelp" class="form-text text-muted">What is this event all about?</small>-->
                            </div>
                            <div class="form-group" v-for="(value, key, idx) in volunteer.data.social" :key="idx">
                                <label class="text-capitalize">{{key}} (optional)</label>
                                <input v-model="volunteer.data.social[key]" type="text" class="form-control" placeholder="social">
                                <!--                                <small class="form-text text-muted">What is this event all about?</small>-->
                            </div>
                            <div class="form-group">
                                <label>Status</label>
                                <select class="form-control" v-model="volunteer.data.status">
                                    <option value="ACCEPTED">Accepted</option>
                                    <option value="PENDING">Pending</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="updateVolunteer">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CalenderImage from "../../../../assets/logos/user.png"
import {VolunteerModel} from "../../../../models/volunteer";

export default {
    name: "updateVolunteer",
    data(){
        return {}
    },
    props: {
        volunteer: {
            type: Object,
            default: ()=>({id: '', data: new VolunteerModel()})
        },
        prevVolunteer: {
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
                this.volunteer.data.image = file;
            }else{
                alert("Please upload a valid image")
            }
        },
        async updateVolunteer(){
            if(!this.volunteer.data.image){
                return alert("Upload an image for this event")
            }else if(!this.volunteer.data.name || !this.volunteer.data.position){
                return alert("Complete all required fields")
            }
            const loading = this.$loading.show({container: this.$refs.updateVolunteer});
            const response = await this.$store.dispatch('volunteer/updateVolunteer', {
                u_volun:this.volunteer,
                o_volun: this.prevVolunteer
            });
            loading.hide();
            if(response.status){
                $('#updateVolunteerModal').modal('hide')
                alert("Operation successful");
            }else{
                alert(response.message)
            }
        }
    },
    mounted(){
        const UpateEventmodal = $('#updateVolunteerModal');
        UpateEventmodal.modal({
            backdrop: 'static',
            show: false
        });
        UpateEventmodal.on('hide.bs.modal', ()=>{
            // this.volunteer = {id: '', data: new VolunteerModel()};
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