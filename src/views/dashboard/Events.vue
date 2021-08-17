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
<!--                        <ul class="list-group list-group-flush">-->
<!--                            <li class="list-group-item">Cras justo odio</li>-->
<!--                            <li class="list-group-item">Dapibus ac facilisis in</li>-->
<!--                            <li class="list-group-item">Vestibulum at eros</li>-->
<!--                        </ul>-->
                        <div class="card-body">
                            <a href="#" class="card-link text-primary">
                                <i class="fa fa-pencil"></i> Update
                            </a>
                            <a href="#" class="card-link text-danger">
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

    </div>
</template>

<script>
import addEvent from "../../components/dashboard/modals/addEvent";
import {mapGetters} from "vuex"

export default {
    name: "Events",
    computed: {
      ...mapGetters({
          events: 'event/getEvents'
      })
    },
    components: {
        addEvent
    },
    mounted() {
        this.$store.dispatch('event/fetchEvents')
    }
}
</script>

<style scoped>

</style>