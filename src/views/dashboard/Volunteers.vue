<template>
    <div class="container-fluid my-4">
        <div class="col-12 my-3">
            <a href="javascript:void(0)" class="float-right" data-toggle="modal" data-target="#addVolunteerModal">
                <i class="fa fa-plus"></i> Add New Volunteer
            </a>
            <h1>Volunteers</h1>
        </div>
        <div class="row">
            <template v-if="volunteers.length > 0">
                <div class="col-12 col-lg-4" v-for="(volunteer, idx) in volunteers" :key="'event_'+idx">
                    <div class="card">
                        <img class="card-img-top" :src="volunteer.data.image" alt="volunteer image">
                        <div class="card-body">
                            <h5 class="card-title">Volunteer {{idx+1}}</h5>
                            <p class="card-text">
                                {{volunteer.data.name}}
                            </p>
                            <a :href="'mailto:'+volunteer.data.email" class="d-block card-text" v-if="volunteer.data.email">
                                {{volunteer.data.email}}
                            </a>
                            <a :href="'tel:'+volunteer.data.phone" class="d-block card-text" v-if="volunteer.data.phone">
                                {{volunteer.data.phone}}
                            </a>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                Position: <span class="float-md-right">{{volunteer.data.position}}</span>
                            </li>
                            <li class="list-group-item" v-for="(value, key, idx) in volunteer.data.social" :key="'social_'+idx">
                                {{key}}:
                                <span class="float-md-right" v-if="value">
                                    <a class="text-primary" :href="value" target="_blank" v-if="key!=='whatsapp'">{{key}} account</a>
                                    <a class="text-primary" :href="'https://wa.me/'+value" target="_blank" v-else>{{key}} account</a>
                                </span>
                                <span class="float-md-right" v-else>
                                    not specified
                                </span>
                            </li>
                            <li class="list-group-item">
                                Created: <span class="float-md-right">{{getReadableDate(volunteer.data.createdAt)}}</span>
                            </li>
                            <li class="list-group-item">
                                Status: <span class="float-md-right badge badge-info">{{volunteer.data.status}}</span>
                            </li>
                        </ul>
                        <div class="card-body">
                            <a href="javascript:void(0)" @click="curr_volunteer=volunteer" class="card-link text-primary" data-toggle="modal" data-target="#updateVolunteerModal">
                                <i class="fa fa-pencil"></i> Update
                            </a>
                            <a href="javascript:void(0)" @click="deleteVolunteer(volunteer)" class="card-link text-danger">
                                <i class="fa fa-trash"></i> Delete
                            </a>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="col-12 text-center pt-5">
                    <h3>Empty Volunteer History</h3>
                </div>
            </template>
        </div>

        <!-- Modal -->
        <add-volunteer/>
        <update-volunteer :volunteer="active_volunteer" :prev-volunteer="curr_volunteer"/>
    </div>
</template>

<script>
import addVolunteer from "../../components/dashboard/modals/volunteer/addVolunteer";
import updateVolunteer from "../../components/dashboard/modals/volunteer/updateVolunteer";
import {mapGetters, mapActions} from "vuex"
import methodsMixin from "../../utils/methodsMixin";
import {VolunteerModel} from "../../models/volunteer";

export default {
    name: "Volunteers",
    data(){
        return {
            curr_volunteer: {id: '', data: {}},
            active_volunteer: {id: '', data: {}},
        }
    },
    watch: {
        curr_volunteer(newVal){
            let tmp_event = Object.assign(new VolunteerModel(), newVal.data);
            this.active_volunteer = {id: newVal.id, data: tmp_event}
        }
    },
    computed: {
        ...mapGetters({
            volunteers: 'volunteer/getVolunteers'
        })
    },
    mixins: [methodsMixin],
    methods: {
        ...mapActions('volunteer', ['deleteVolunteer'])
    },
    components: {
        addVolunteer,
        updateVolunteer
    },
    mounted() {
        this.$store.dispatch('volunteer/fetchVolunteers')
    }
}
</script>

<style scoped>

</style>