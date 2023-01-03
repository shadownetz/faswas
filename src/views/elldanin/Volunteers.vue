<template>
    <div>
        <index-nav/>
        <!--Breadcrumb Area Start-->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-content text-center">
                            <h1 class="breadmome-name">Volunteers</h1>
                            <ul>
                                <li>
                                    <router-link :to="{name: 'Home'}">Home</router-link>
                                </li>
                                <li class="active">Volunteers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Breadcrumb Area End-->
        <!--Volunteer Area Start-->
        <div class="volunteer-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <template v-if="volunteers.length > 0">
                        <div class="col-md-6 col-lg-4 col-12" v-for="(volunteer, idx) in volunteers" :key="'volun_'+idx">
                            <!--Single Volunteer Start-->
                            <div class="single-volunteer mb-30">
                                <div class="volunteer-img img-full">
                                    <img :src="volunteer.data.image" alt="">
                                </div>
                                <div class="volunteer-content">
                                    <h3 class="member-name"><a href="javascript:void(0)">{{volunteer.data.name}}</a></h3>
                                    <p class="designation">{{volunteer.data.position}}</p>
                                    <ul>
                                        <li v-for="(value, key, idx1) in volunteer.data.social" :key="'social_'+idx1">
                                            <a :href="value" v-if="key!=='whatsapp'" target="_blank">
                                                <i :class="`fa fa-${key}`"></i>
                                            </a>
                                            <a :href="`https://wa.me/${value}`" target="_blank" v-else>
                                                <i :class="`fa fa-${key}`"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--Single Volunteer End-->
                        </div>
                    </template>
                    <div class="col-12 text-center mt-5" v-else>
                        <h3>There is no volunteer at the moment</h3>
                        <h4>Please check back later</h4>
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
        <!--Volunteer Area End-->
        <index-foot/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import IndexNav from "../../components/indexNav.vue";
import IndexFoot from "../../components/indexFoot.vue";
export default {
    name: "Volunteers",
    components: {IndexFoot, IndexNav},
    computed: {
        ...mapGetters('volunteer', {
            volunteers: 'getVolunteers'
        })
    },
    mounted(){
        this.$store.dispatch('volunteer/fetchAcceptedVolunteers')
    }
}
</script>

<style scoped>

</style>