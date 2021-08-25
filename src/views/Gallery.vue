<template>
    <div>
        <head-nav/>
        <!--Breadcrumb Area Start-->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb-content text-center">
                            <h1 class="breadmome-name">Gallery</h1>
                            <ul>
                                <li>
                                    <router-link :to="{name: 'Home'}">Home</router-link>
                                </li>
                                <li class="active">Gallery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Breadcrumb Area End-->
        <!--Gallery Area Start-->
        <div class="gallery-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <template v-if="galleries.length > 0">
                        <div class="col-md-4 col-sm-6 mt-3" v-for="(gallery, idx) in galleries" :key="'gallery_'+idx">
                            <div class="single-gallery-img mb-30" style="background-color: #333333; height:100%">
                                <a :href="gallery.data.image" data-fancybox="gallery">
                                    <img :src="gallery.data.image" alt="">
                                </a>
                            </div>
                        </div>
                    </template>
                    <div class="col-12 text-center mt-5" v-else>
                        <h4>Nothing to show here.</h4>
                    </div>
                </div>
<!--                <div class="row">-->
<!--                    <div class="col-12">-->
<!--                        &lt;!&ndash;See More Button Start&ndash;&gt;-->
<!--                        <div class="see-more-btn">-->
<!--                            <a href="javascript:void(0)">see more</a>-->
<!--                        </div>-->
<!--                        &lt;!&ndash;See More Button End&ndash;&gt;-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
        <!--Gallery Area End-->
        <foot-nav/>
    </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    name: "Gallery",
    computed: {
      ...mapGetters('gallery', {
          galleries: 'getGalleries'
      })
    },
    mounted() {
        this.$store.dispatch('gallery/fetchGalleries')
    }
}
</script>

<style scoped>

</style>