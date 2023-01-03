<template>
    <div>
        <head-nav/>
        <!--Breadcrumb Area Start-->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-content text-center">
                            <h1 class="breadmome-name">Events</h1>
                            <ul>
                                <li>
                                    <router-link :to="{name: 'Home'}">Home</router-link>
                                </li>
                                <li class="active">Events</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Breadcrumb Area End-->
        <!--Our Event Area Start-->
        <div class="our-event-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <template v-if="events.length > 0">
                        <div class="col-md-6 col-lg-4" v-for="(event, idx) in events" :key="'event_'+idx">
                            <!--Single Event Start-->
                            <div class="single-event event-three-col mb-30">
                                <div class="event-img img-full">
                                    <img :src="event.data.image" alt="">
                                </div>
                                <div class="single-event-title">
                                    <div class="event-date">
                                        <h4>{{getReadableDate(event.data.scheduledFor)}}</h4>
                                    </div>
                                    <div class="event-content">
                                        <h3><a href="javascript:void(0)">{{event.data.title}}</a></h3>
                                        <p>{{getReadableTime(event.data.scheduledFor)}}</p>
                                    </div>
                                </div>
                            </div>
                            <!--Single Event End-->
                        </div>
                    </template>
                    <div class="col-12 text-center mt-5" v-else>
                        <h3>There are no events at the moment</h3>
                        <p>Please check back later</p>
                    </div>
                </div>
<!--                <div class="row">-->
<!--                    <div class="col-12">-->
<!--                        &lt;!&ndash;Pagination Start&ndash;&gt;-->
<!--                        <div class="product-pagination">-->
<!--                            <ul>-->
<!--                                <li class="active"><a href="javascript:void(0)">1</a></li>-->
<!--                                <li><a href="javascript:void(0)">2</a></li>-->
<!--                                <li><a href="javascript:void(0)">3</a></li>-->
<!--                                <li><a href="javascript:void(0)">4</a></li>-->
<!--                                <li><a href="javascript:void(0)">5</a></li>-->
<!--                                <li><a href="javascript:void(0)"><i class="fa fa-angle-double-right"></i></a></li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                        &lt;!&ndash;Pagination End&ndash;&gt;-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
        <!--Our Event Area End-->
        <foot-nav/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import methodsMixin from "../utils/methodsMixin";

export default {
    name: "Events",
    computed: {
        ...mapGetters('event', {
            events: 'getEvents'
        })
    },
    mixins: [methodsMixin],
    mounted() {
        this.$store.dispatch('event/fetchEvents')
    }
}
</script>

<style scoped>

</style>