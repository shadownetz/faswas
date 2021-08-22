<template>
    <div class="container-fluid my-4">
        <div class="col-12 my-3">
            <a href="javascript:void(0)" class="float-right" data-toggle="modal" data-target="#addGalleryModal">
                <i class="fa fa-plus"></i> Add a new image
            </a>
            <h1>Gallery</h1>
        </div>
        <div class="row">
            <template v-if="galleries.length > 0">
                <div class="col-12 col-lg-4" v-for="(gallery, idx) in galleries" :key="'gallery_'+idx">
                    <div class="card">
                        <img class="card-img-top" :src="gallery.data.image" alt="gallery image">
                        <div class="card-body">
                            <h5 class="card-title">Gallery {{idx+1}}</h5>
                            <p class="card-text">
                                {{gallery.data.description}}
                            </p>
                        </div>
                        <!--                        <ul class="list-group list-group-flush">-->
                        <!--                            <li class="list-group-item">-->
                        <!--                                Scheduled for: <span class="float-md-right">{{getReadableDatetime(gallery.data.scheduledFor)}}</span>-->
                        <!--                            </li>-->
                        <!--                            <li class="list-group-item">Dapibus ac facilisis in</li>-->
                        <!--                            <li class="list-group-item">Vestibulum at eros</li>-->
                        <!--                        </ul>-->
                        <div class="card-body">
                            <!--                            <a href="javascript:void(0)" @click="curr_event=gallery" class="card-link text-primary" data-toggle="modal" data-target="#updateEventModal">-->
                            <!--                                <i class="fa fa-pencil"></i> Update-->
                            <!--                            </a>-->
                            <a href="javascript:void(0)" @click="deleteGallery(gallery)" class="card-link text-danger">
                                <i class="fa fa-trash"></i> Delete
                            </a>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="col-12 text-center pt-5">
                    <h3>Empty Gallery History</h3>
                </div>
            </template>
        </div>

        <!-- Modal -->
        <add-gallery/>
        <!--        <update-event :event="active_event" :prev-event="curr_event"/>-->
    </div>
</template>

<script>
import addGallery from "../../components/dashboard/modals/gallery/addGallery";
// import updateEvent from "../../components/dashboard/modals/event/updateEvent";
import {mapGetters, mapActions} from "vuex"
import methodsMixin from "../../utils/methodsMixin";
import {EventModel} from "../../models/event";

export default {
    name: "Galleries",
    data(){
        return {
            curr_gallery: {id: '', data: {}},
            active_gallery: {id: '', data: {}},
        }
    },
    watch: {
        curr_gallery(newVal){
            let tmp_event = Object.assign(new EventModel(), newVal.data);
            this.active_gallery = {id: newVal.id, data: tmp_event}
        }
    },
    computed: {
        ...mapGetters({
            galleries: 'gallery/getGalleries'
        })
    },
    mixins: [methodsMixin],
    methods: {
        ...mapActions('gallery', ['deleteGallery'])
    },
    components: {
        addGallery,
        // updateEvent
    },
    mounted() {
        this.$store.dispatch('gallery/fetchGalleries')
    }
}
</script>

<style scoped>

</style>