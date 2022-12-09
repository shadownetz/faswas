<template>
    <div>
        <head-nav/>
        <!--Slider Area Start-->
        <div class="slider-area">
            <div class="hero-slider owl-carousel">
                <!--Single Slider Start-->
                <div class="single-slider slider-style-2" :style="{backgroundImage: 'url('+slide1+')'}">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="hero-slider-content" style="max-width: 100%">
                                    <h1>
                                        Elldanin Humanitarian Foundation Intl'l
                                    </h1>
                                    <!--                                <div class="slider-btn">-->
                                    <!--                                    <a class="default-btn" href="#">READ MORE</a>-->
                                    <!--                                </div>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Single Slider End-->
                <!--Single Slider Start-->
                <div class="single-slider slider-style-2" :style="{backgroundImage: 'url('+slide2+')'}">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="hero-slider-content" style="max-width: 100%">
                                    <h1>Small help together makes better life, the reason for our initiative FASWAS</h1>
                                    <div class="slider-btn">
                                        <router-link class="default-btn" :to="{name: 'FASWASPage'}">
                                            Read More
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Single Slider End-->
            </div>
        </div>
        <!--Slider Area End-->
        <about-content/>

        <contact-content/>
        <foot-nav/>
    </div>
</template>

<script>
import HeadNav from "../components/indexNav";
import FootNav from "../components/indexFoot";
import slide1 from "../assets/../assets/img/slider/1.jpeg";
import slide2 from "../assets/../assets/img/slider/2.jpeg";
import serviceBG from "../assets/img/bg/bg1.jpg";
import AboutContent from "../components/elldanin/AboutContent";
import ContactContent from "../components/elldanin/ContactContent";

export default {
    name: "Index",
    data(){
        return {
            slide1,
            slide2,
            serviceBG
        }
    },
    mounted() {
        $('.hero-slider').owlCarousel({
            smartSpeed: 1000,
            nav: true,
            loop: true,
            autoplay: true,
            autoHeight:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                768: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                991: {
                    items: 1,
                }
            }
        });
    },
    components: {
        ContactContent,
        AboutContent,
        HeadNav,
        FootNav
    }
}
</script>

<style scoped>
.service-image{
    opacity: 0.3;
}
</style>