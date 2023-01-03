<template>
    <div ref="becomeAVolunteer">
        <div class="row justify-content-center">
            <div class="event-image">
                <img id="ev-img" src="../../../assets/logos/user.png" alt="volunteer image">
            </div>
            <div class="col-12 text-center mt-4">
                <label for="up-eve-img" class="btn btn-outline-dark">
                    Upload your profile photo
                    <input @change="uploadFile" id="up-eve-img" type="file" accept="image/*">
                </label>
            </div>
        </div>
        <div class="col-12">
            <form @submit.prevent="addVolunteer">
                <div class="form-group">
                    <label>Name</label>
                    <input v-model="volunteer.name" type="text" class="form-control" placeholder="Name">
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input v-model="volunteer.phone" type="tel" class="form-control" placeholder="Phone Number">
                </div>
                <div class="form-group">
                    <label>Email Address</label>
                    <input v-model="volunteer.email" type="email" class="form-control" placeholder="Email Address">
                </div>
                <div class="form-group" v-for="(value, key, idx) in volunteer.social" :key="idx">
                    <label class="text-capitalize">{{key}} (optional)</label>
                    <input v-model="volunteer.social[key]" type="text" class="form-control" placeholder="*">
                </div>
                <div class="col-12 text-center">
                    <button type="submit" class="btn el-success btn-lg mt-3">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import CalenderImage from "../../../assets/logos/user.png"
import {VolunteerModel} from "../../../models/volunteer";

export default {
    name: "becomeAVolunteerForm",
    data(){
        return {
            volunteer: new VolunteerModel()
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
                this.volunteer.image = file;
            }else{
                alert("Please upload a valid image")
            }
        },
        async addVolunteer(){
            if(!this.volunteer.image){
                return alert("Upload an image for this volunteer")
            }else if(!this.volunteer.name || !this.volunteer.email || !this.volunteer.phone){
                return alert("Complete all fields")
            }
            const loading = this.$loading.show({container: this.$refs.becomeAVolunteer});
            const response = await this.$store.dispatch('volunteer/addVolunteer', this.volunteer);
            loading.hide();
            if(response.status){
                this.$emit("done")
            }else{
                alert(response.message)
            }
        }
    },
    mounted(){
        const addVolunteerModal = $('#addVolunteerModal');
        addVolunteerModal.modal({
            backdrop: 'static',
            show: false
        });
        addVolunteerModal.on('hide.bs.modal', ()=>{
            this.volunteer = new VolunteerModel();
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
.el-success{
    background-color: #00baa3;
    color: #FFFFFF;
}
</style>