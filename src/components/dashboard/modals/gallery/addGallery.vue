<template>
    <div class="modal fade" id="addGalleryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" ref="addGallery">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Gallery Image</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div class="event-image">
                            <img id="ev-img" src="../../../../assets/logos/gallery.png" alt="gallery image">
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
                                <label for="exampleInputEmail1">Description (optional)</label>
                                <input v-model="gallery.description" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description">
                                <small id="emailHelp" class="form-text text-muted">What is this image all about?</small>
                            </div>
<!--                            <div class="form-group">-->
<!--                                <label for="exampleInputEmail1">Scheduled for</label>-->
<!--                                <input v-model="gallery.scheduledFor" type="datetime-local" class="form-control">-->
<!--                            </div>-->
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="uploadGallery">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CalenderImage from "../../../../assets/logos/gallery.png"
import {GalleryModel} from "../../../../models/gallery";

export default {
    name: "addGallery",
    data(){
        return {
            gallery: new GalleryModel()
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
                this.gallery.image = file;
            }else{
                alert("Please upload a valid image")
            }
        },
        async uploadGallery(){
            if(!this.gallery.image){
                return alert("Upload an image!")
            }
            const loading = this.$loading.show({container: this.$refs.addGallery});
            const response = await this.$store.dispatch('gallery/addGallery', this.gallery);
            loading.hide();
            if(response.status){
                $('#addGalleryModal').modal('hide')
                alert("Operation successful");
            }else{
                alert(response.message)
            }
        }
    },
    mounted(){
        const addGalleryModal = $('#addGalleryModal');
        addGalleryModal.modal({
            backdrop: 'static',
            show: false
        });
        addGalleryModal.on('hide.bs.modal', ()=>{
            this.gallery = new GalleryModel();
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