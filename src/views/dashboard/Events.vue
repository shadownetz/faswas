<template>
    <div class="container-fluid my-4">
        <div class="col-12 my-3">
            <a href="javascript:void(0)" class="float-right" data-toggle="modal" data-target="#addEventModal">
                <i class="fa fa-plus"></i> Add New Events
            </a>
            <h1>Events</h1>
        </div>
        <div class="row">
            <template v-if="events.length > 0">
                <div class="col-12 col-lg-4" v-for="(event, idx) in events" :key="'event_'+idx">
                    <div class="card">
                        <img class="card-img-top" :src="event.data.image" alt="event image">
                        <div class="card-body">
                            <h5 class="card-title">Event {{idx+1}}</h5>
                            <p class="card-text">
                                {{event.data.title}}
                            </p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                               Scheduled for: <span class="float-md-right">{{getReadableDatetime(event.data.scheduledFor)}}</span>
                            </li>
<!--                            <li class="list-group-item">Dapibus ac facilisis in</li>-->
<!--                            <li class="list-group-item">Vestibulum at eros</li>-->
                        </ul>
                        <div class="card-body">
                            <a href="javascript:void(0)" @click="curr_event=event" class="card-link text-primary" data-toggle="modal" data-target="#updateEventModal">
                                <i class="fa fa-pencil"></i> Update
                            </a>
                            <a href="javascript:void(0)" @click="deleteEvent(event)" class="card-link text-danger">
                                <i class="fa fa-trash"></i> Delete
                            </a>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="col-12 text-center pt-5">
                    <h3>Empty Event History</h3>
                </div>
            </template>
        </div>

        <!-- Modal -->
        <add-event/>
        <update-event :event="active_event" :prev-event="curr_event"/>
    </div>
</template>

<script>
import addEvent from "../../components/dashboard/modals/addEvent";
import updateEvent from "../../components/dashboard/modals/updateEvent";
import {mapGetters, mapActions} from "vuex"
import methodsMixin from "../../utils/methodsMixin";
import {EventModel} from "../../models/event";

export default {
    name: "Events",
    data(){
      return {
          curr_event: {id: '', data: {}},
          active_event: {id: '', data: {}},
      }
    },
    watch: {
        curr_event(newVal){
            let tmp_event = Object.assign(new EventModel(), newVal.data);
            this.active_event = {id: newVal.id, data: tmp_event}
        }
    },
    computed: {
      ...mapGetters({
          events: 'event/getEvents'
      })
    },
    mixins: [methodsMixin],
    methods: {
        ...mapActions('event', ['deleteEvent'])
    },
    components: {
        addEvent,
        updateEvent
    },
    mounted() {
        this.$store.dispatch('event/fetchEvents')
    }
}
</script>

<style scoped>

</style>